import React, { useContext } from 'react';
import { View,Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import MessageContext from './Context';
import User from './User';
import styles from './styles';
import RepliedThread from './RepliedThread';
import MessageAvatar from './MessageAvatar';
import Attachments from './Attachments';
import Urls from './Urls';
import Thread from './Thread';
import Blocks from './Blocks';
import Reactions from './Reactions';
import Broadcast from './Broadcast';
import Discussion from './Discussion';
import Content from './Content';
import CallButton from './CallButton';
import { themes } from '../../lib/constants';
import { IMessage, IMessageInner, IMessageTouchable } from './interfaces';
import { useTheme } from '../../theme';
import RightIcons from './Components/RightIcons';
import moment from 'moment';

const MessageInner = React.memo((props: IMessageInner) => {
	if (props.isPreview) {
		return (
			<>
				{/* <User {...props} /> */}
				<>
					<Content {...props} />
					<Attachments {...props} />
				</>
				<Urls {...props} />
			</>
		);
	}

	if (props.type === 'discussion-created') {
		return (
			<>
				{/* <User {...props} /> */}
				<Discussion {...props} />
			</>
		);
	}

	if (props.type === 'jitsi_call_started') {
		return (
			<>
				{/* <User {...props} /> */}
				<Content {...props} isInfo />
				<CallButton {...props} />
			</>
		);
	}

	if (props.blocks && props.blocks.length) {
		return (
			<>
				{/* <User {...props} /> */}
				<Blocks {...props} />
				<Thread {...props} />
				<Reactions {...props} />
			</>
		);
	}

	return (
		<>
			{/* <User {...props} /> */}
			<>
				<Content {...props} />
				<Attachments {...props} />
			</>
			<Urls {...props} />
			<Thread {...props} />
			<Reactions {...props} />
			<Broadcast {...props} />
		</>
	);
});
MessageInner.displayName = 'MessageInner';

const Message = React.memo((props: IMessage) => {
	
	const { colors, theme } = useTheme();
	const { user } = useContext(MessageContext);
	const itsMe = props.author?._id === user.id;
	const time = moment(props.ts).format(props.timeFormat);
	
	// 初期化（自分以外をデフォルトとする。）
	var style_messageContentWithHeader;
	
	if (itsMe){
		style_messageContentWithHeader = styles.messageContentWithHeaderMe;
	} else {
		style_messageContentWithHeader = styles.messageContentWithHeaderOther;
	}

	// 吹き出しのライト/ダークモード対応	
	if ('light' === theme){
		// style_messageContentWithHeader.backgroundColor = 'aqua';
	} else {

	}


	//　添付画の有無
	var isAttached = false;
	if (props.attachments && props.attachments.length > 0){
		isAttached = true;	
	}

	if (props.isThreadReply || props.isThreadSequential || props.isInfo || props.isIgnored) {
		const thread = props.isThreadReply ? <RepliedThread {...props} /> : null;
		return (
			<View style={[styles.container, props.style]}>
				{thread}
				<View style={styles.flex}>
				
				{itsMe ? 
					(null) 
				:
					<MessageAvatar small {...props} />
				}

					<View style={style_messageContentWithHeader}>
						<Content {...props} />
						{props.isInfo && props.type === 'message_pinned' ? (
							<View pointerEvents='none'>
								<Attachments {...props} />
							</View>
						) : null}
					</View>
				</View>
			</View>
		);
	}

	return (
		<View style={[styles.container, props.style]}>
			<View style={styles.flex}>
			
			
			{/* アイコン */}
			{itsMe ? 
				(null) 
			: 
				<MessageAvatar {...props} />
			}
			
			{/* 発言者 */}
			{itsMe ? 
				<View style={styles.hatsugenShaMe}>
					<Text style={[styles.time, { color: colors.fontSecondaryInfo }]}>{time}</Text>
				</View>
			: 
				<View style={styles.hatsugenShaOther}>
					<User {...props} />
				</View>	
			}

				<View style={style_messageContentWithHeader}>
					<MessageInner {...props} />

					{/* 添付画像用の幅 */}
					{isAttached ? 
						<Text style={{opacity: 0, height: 0}}>{"　　　　　　　　　　　　　　　　　　　　　　　　"}</Text>
					: 
						(null) 
					}

					
					
					{/* デバック用 */}
					{/* <Text>{JSON.stringify(props.msg)}</Text> */}
					<Text>{"デバック用"}</Text>
					<Text>{JSON.stringify(theme)}</Text>
					
					

					


				</View>
				{!props.isHeader ? (
					<RightIcons
						type={props.type}
						msg={props.msg}
						isEdited={props.isEdited}
						hasError={props.hasError}
						isReadReceiptEnabled={props.isReadReceiptEnabled}
						unread={props.unread}
						isTranslated={props.isTranslated}
					/>
				) : null}
			</View>
		</View>
	);
});
Message.displayName = 'Message';

const MessageTouchable = React.memo((props: IMessageTouchable & IMessage) => {
	const { onPress, onLongPress } = useContext(MessageContext);
	const { theme } = useTheme();

	let backgroundColor = undefined;
	if (props.isBeingEdited) {
		backgroundColor = themes[theme].statusBackgroundWarning2;
	}
	if (props.highlighted) {
		backgroundColor = themes[theme].surfaceNeutral;
	}

	if (props.hasError) {
		return (
			<View>
				<Message {...props} />
			</View>
		);
	}

	return (
		<Touchable
			onLongPress={onLongPress}
			onPress={onPress}
			disabled={(props.isInfo && !props.isThreadReply) || props.archived || props.isTemp || props.type === 'jitsi_call_started'}
			style={{ backgroundColor }}
		>
			<View>
				<Message {...props} />
			</View>
		</Touchable>
	);
});

MessageTouchable.displayName = 'MessageTouchable';

export default MessageTouchable;

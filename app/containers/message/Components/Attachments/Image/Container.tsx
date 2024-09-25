import React, { useContext } from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../../../theme';
import Markdown from '../../../../markdown';
import { useMediaAutoDownload } from '../../../hooks/useMediaAutoDownload';
import { Button } from './Button';
import { MessageImage } from './Image';
import { IImageContainer } from './definitions';
import MessageContext from '../../../Context';
import { WidthAwareView } from '../../WidthAwareView';

const ImageContainer = ({
	file,
	showAttachment,
	getCustomEmoji,
	style,
	isReply,
	author,
	msg
}: IImageContainer): React.ReactElement | null => {
	const { user } = useContext(MessageContext);
	const { theme } = useTheme();
	const { status, onPress, url, isEncrypted } = useMediaAutoDownload({ file, author, showAttachment });
	const itsMe = author?._id === user.id;

	const image = (
		<Button onPress={onPress}>
			<WidthAwareView>
				<MessageImage uri={url} status={status} encrypted={isEncrypted} />
			</WidthAwareView>
		</Button>
	);

	if (msg) {
		return (
			<View>
				{/* 画像つき投稿において、発言内容を自/他によって分岐させる。 */}
				<Markdown msg={msg} style={[isReply && style, itsMe ? {textAlign: 'right'} : {}]} username={user.username} getCustomEmoji={getCustomEmoji} theme={theme} />
				{image}
			</View>
		);
	}

	return image;
};

ImageContainer.displayName = 'MessageImageContainer';

export default ImageContainer;

import { StyleSheet } from 'react-native';

import sharedStyles from '../../views/Styles';
import { isTablet } from '../../lib/methods/helpers';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default StyleSheet.create({
	root: {
		flexDirection: 'row'
	},
	container: {
		paddingVertical: 4,
		width: '100%',
		paddingHorizontal: 14,
		flexDirection: 'column'
	},
	contentContainer: {
		flex: 1
	},
	// ライトモード
	messageContentWithHeaderMe: {
		width:'auto',
		marginTop: 5,
		marginBottom: 10,
		marginRight: 10,
		marginLeft: 80,
		borderRadius: 20, // 角に丸みをつける
		backgroundColor: '#00FFFF',//背景色
		padding:10,

		// 引用付き投稿の場合<Attachments>　<Content>となり、子要素でレイアウトが崩れないようにする。
		flex: 1, // 子要素の範囲
		alignItems: 'flex-end', //子要素を右寄　幅自動調整
	},
	messageContentWithHeaderOther: {
		width:'auto',
		marginTop: 5,
		marginBottom: 10,
		marginRight: 80,
		marginLeft: 10,
		borderRadius: 20, // 角に丸みをつける
		backgroundColor: '#EEEEEE',//背景色
		padding:10,

		// 引用付き投稿の場合<Attachments>　<Content>となり、子要素でレイアウトが崩れないようにする。
		flex: 1, // 子要素の範囲
		alignItems: 'flex-start', //子要素を右寄　幅自動調整
	},
	// ダークモード
	messageContentWithHeaderMeDark: {
		width:'auto',
		marginTop: 5,
		marginBottom: 10,
		marginRight: 10,
		marginLeft: 80,
		borderRadius: 20, // 角に丸みをつける
		backgroundColor: '#3366FF',//背景色
		padding:10,

		// 引用付き投稿の場合<Attachments>　<Content>となり、子要素でレイアウトが崩れないようにする。
		flex: 1, // 子要素の範囲
		alignItems: 'flex-end', //子要素を右寄　幅自動調整
		
	},
	messageContentWithHeaderOtherDark: {
		width:'auto',
		marginTop: 5,
		marginBottom: 10,
		marginRight: 80,
		marginLeft: 10,
		borderRadius: 20, // 角に丸みをつける
		backgroundColor: '#808080',//背景色
		padding:10,

		// 引用付き投稿の場合<Attachments>　<Content>となり、子要素でレイアウトが崩れないようにする。
		flex: 1, // 子要素の範囲
		alignItems: 'flex-start', //子要素を右寄　幅自動調整
		
	},
	// 添付画像のみ
	messageContentWithHeaderMeImageOnly: {
		marginTop: 5,
		marginBottom: 10,
		marginRight: 10,
		marginLeft: 80,
		borderRadius: 20, // 角に丸みをつける
		padding:10,
	},
	messageContentWithHeaderOtherImageOnly: {
		marginTop: 5,
		marginBottom: 10,
		marginRight: 80,
		marginLeft: 10,
		borderRadius: 20, // 角に丸みをつける
		padding:10,
	},	
	tokoshaMe:{
		marginRight: 10,
		marginLeft: 'auto',
		
	},
	tokoshaOther:{
		marginRight: 'auto',
		marginLeft: 10,
		flexDirection: 'row'
	},
	messageContentWithError: {
		marginLeft: 0
	},
	flexMe: {
		flex: 1, // 子要素の範囲
		alignItems: 'flex-end', //子要素を右寄　幅自動調整
		flexDirection: 'column'
	},
	flexOther: {
		flex: 1,  // 子要素の範囲
		alignItems: 'flex-start', //子要素を左寄　幅自動調整
		flexDirection: 'column'
	},
	temp: { opacity: 0.3 },
	marginTop: {
		marginTop: 6
	},
	reactionsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 8
	},
	reactionButton: {
		borderRadius: 20
	},
	reactionContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 1,
		height: 28,
		minWidth: 46.3
	},
	reactionCount: {
		fontSize: 14,
		marginLeft: 3,
		marginRight: 8.5,
		...sharedStyles.textSemibold
	},
	reactionEmoji: {
		fontSize: 13,
		marginLeft: 7,
		color: '#ffffff'
	},
	reactionCustomEmoji: {
		width: 19,
		height: 19,
		marginLeft: 7
	},
	avatar: {
		marginTop: 4
	},
	avatarSmall: {
		marginLeft: 16
	},
	buttonContainer: {
		marginTop: 8,
		flexDirection: 'row',
		alignItems: 'center'
	},
	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4
	},
	buttonIcon: {
		marginRight: 8
	},
	buttonText: {
		fontSize: 12,
		...sharedStyles.textSemibold
	},
	imageContainer: {
		flexDirection: 'column',
		borderRadius: 4
	},
	image: {
		width: '100%',
		minHeight: isTablet ? 300 : 200,
		borderRadius: 4,
		overflow: 'hidden'
	},
	imagePressed: {
		opacity: 0.5
	},
	inlineImage: {
		width: 300,
		height: 300,
		resizeMode: 'contain'
	},
	text: {
		fontSize: 16,
		...sharedStyles.textRegular
	},
	textInfo: {
		fontSize: 16,
		...sharedStyles.textRegular
	},
	startedDiscussion: {
		fontStyle: 'italic',
		fontSize: 16,
		marginBottom: 6,
		...sharedStyles.textRegular
	},
	time: {
		fontSize: 13,
		marginLeft: 8,
		...sharedStyles.textRegular
	},
	repliedThread: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 6,
		marginBottom: 12
	},
	repliedThreadIcon: {
		marginRight: 10,
		marginLeft: 16
	},
	repliedThreadName: {
		fontSize: 16,
		flex: 1,
		...sharedStyles.textRegular
	},
	repliedThreadDisclosure: {
		marginLeft: 4,
		marginRight: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	threadBadge: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginLeft: 8
	},
	threadBell: {
		marginLeft: 8
	},
	rightIcons: {
		paddingLeft: 5
	},
	threadDetails: {
		flex: 1,
		marginLeft: 12
	},
	blurView: {
		position: 'absolute',
		borderWidth: 0,
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	blurIndicator: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

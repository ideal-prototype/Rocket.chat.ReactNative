import React from 'react';

import * as HeaderButton from '../../../containers/HeaderButton';
import { useVideoConf } from '../../../lib/hooks/useVideoConf';

export const HeaderCallButton = ({ rid, disabled }: { rid: string; disabled: boolean }): React.ReactElement | null => {
	const { showInitCallActionSheet, callEnabled, disabledTooltip } = useVideoConf(rid);

	if (callEnabled)
		return (
			null
			// 各チャットルームのヘッダー部分の電話アイコンを削除する。

			// <HeaderButton.Item
			// 	disabled={disabledTooltip || disabled}
			// 	iconName='phone'
			// 	onPress={showInitCallActionSheet}
			// 	testID='room-view-header-call'
			// />
		);
	return null;
};

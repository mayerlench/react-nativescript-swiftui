// app.ts
import type { SwiftUI } from '@nativescript/swift-ui';
import type { NativeScriptProps, ViewAttributes } from 'react-nativescript';

interface ISwiftUIData {
    title?: string;
    titleColor?: UIColor;
    desc?: string;
    descColor?: UIColor;
    subTitle?: string;
    subTitleColor?: UIColor;
    cardBackgroundColor?: UIColor;
}

export interface SwiftUIAttributes extends ViewAttributes {
    data: ISwiftUIData
    swiftId: string
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			swiftUI: NativeScriptProps<SwiftUIAttributes, SwiftUI>
		}
	}
}
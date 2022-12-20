import { Color, CoreTypes, Label } from '@nativescript/core';
import { registerSwiftUI, SwiftUI, SwiftUIEventData, UIDataDriver } from '@nativescript/swift-ui';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { NSVElement } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";
import { ISwiftUIData } from '../typings/swiftui';

declare var CardProvider: any;
registerSwiftUI(
    "card",
    (view) => new UIDataDriver(CardProvider.alloc().init(), view)
);

type CardComponentProps = {
    route: RouteProp<MainStackParamList, "CardComponent">,
    navigation: FrameNavigationProp<MainStackParamList, "CardComponent">,
};

function CardComponent({ navigation }: CardComponentProps) {
    const labelRef = React.useRef<NSVElement<Label>>(null);

    const swiftUIData: ISwiftUIData = {
        title: "Learn SwiftUI ",
        titleColor: new Color('blue').ios,
        desc: "with NativeScript from React JS?",
        subTitle: "Cool!",
        cardBackgroundColor: new Color('black').ios
    };

    const swiftUIEvent = (args: SwiftUIEventData<{ showing?: boolean }>) => {
        labelRef?.current?.nativeView
            .animate({
                opacity: args.data.showing ? 0 : 1,
                translate: { x: 0, y: args.data.showing ? 60 : 0 },
                curve: CoreTypes.AnimationCurve.easeInOut,
            })
            .catch(() => { });
    }

    return (
        <gridLayout >
            <swiftUI
                swiftId="card"
                data={swiftUIData}
                onLoaded={(args) => {
                    const su = (args.object as SwiftUI);
                    su.on(SwiftUI.swiftUIEventEvent, swiftUIEvent);
                }}
            />

            <label
                ref={labelRef}
                text="I'm a NativeScript Label"
                className="t-20 text-center m-t-20 font-weight-bold v-top"
            />
        </gridLayout>

    );
}

export default CardComponent
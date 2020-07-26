import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

const AnimatedView = (props: any) => {

    console.log(props)
    const usePulse = (startDelay = 500) => {
        const scale = useRef(new Animated.Value(0)).current;

        const pulse = () => {
            Animated.parallel([
                Animated.spring(scale, {
                    toValue: 1,
                    friction: 8,
                    tension: 50,
                    useNativeDriver: true
                }),
                Animated.timing(scale, {
                    toValue: 1,
                    duration: startDelay,
                    useNativeDriver: true
                }),

            ]).start();
        };

        useEffect(() => {
            pulse()
        }, [])

        return scale;
    }

    const transformField = (component: any, offset?: number) => {
        if (offset === undefined) offset = 0;

        return component.interpolate({
            inputRange: [0, 1],
            outputRange: [150 + offset, offset],
            extrapolate: "clamp"
        });
    }

    const scaleField = usePulse(props.delay);

    return (
        <Animated.View style={{ opacity: scaleField, transform: [{ translateY: transformField(scaleField) }, { perspective: 1000 }] }}>
            {props.children}
        </Animated.View>
    )
}

export default AnimatedView
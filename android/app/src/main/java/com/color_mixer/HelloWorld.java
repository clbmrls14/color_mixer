package com.color_mixer;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class HelloWorld extends ReactContextBaseJavaModule {
    HelloWorld(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "HelloWorld";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String sayHello(String hexColor1, String hexColor2) {
        Log.d("HelloWorld", "Hello World! Color 1: #" + hexColor1 + ", Color 2: #" + hexColor2);
        return "Hello World!";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String mixColors(int hexColor1, int hexColor2) {
        int hex = hexColor1 + hexColor2;
        return Integer.toHexString(hex);
    }
}

package com.better

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String? {
        return "Better"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this);
        super.onCreate(null)
    }
}

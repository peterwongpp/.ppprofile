slate.configAll({
  "defaultToCurrentScreen": true,
  "checkDefaultsOnLoad": true,
  "orderScreensLeftToRight": true
});

var mainScreen    = "1440x900";
var tvbSeatScreen = "1920x1080";
var screens = {
  "mainScreen": mainScreen,
  "tvbSeatScreen": tvbSeatScreen
};

// expects lyric to be put in the left of main screen.
// actual lyric: (0, 46, 360, screenSizeY - 46)
// values for DesktopLyric: (46, 1146, 0, 0)
var lyricOverlay = {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": 294,
  "height": "screenSizeY"
}

var gridConfigs = {};
for (var screenName in screens) {
  gridConfigs[screens[screenName]] = { "width": 6, "height": 6 };
}
var gridOperation = slate.operation("grid", {
  "grids": gridConfigs,
  "padding": 5
});

var mainScreenLyricOverlayOperation = slate.operation("move", {
  "x": lyricOverlay["x"],
  "y": lyricOverlay["y"],
  "width": lyricOverlay["width"],
  "height": lyricOverlay["height"],
  "screen": screens["mainScreen"]
});

var mainScreenOriginX = "(" + lyricOverlay["x"] + "+" + lyricOverlay["width"] + ")";
var mainScreenOriginY = "(" + lyricOverlay["y"] + ")";
var mainScreenSizeX = "(screenSizeX-" + lyricOverlay["x"] + "-" + lyricOverlay["width"] + ")";
var mainScreenSizeY = "screenSizeY";

var mainScreenTopLeftOperation = slate.operation("move", {
  "x": mainScreenOriginX,
  "y": mainScreenOriginY,
  "width": mainScreenSizeX + "/2",
  "height": mainScreenSizeY + "/2",
  "screen": screens["mainScreen"]
});

var mainScreenTopOperation = slate.operation("move", {
  "x": mainScreenOriginX,
  "y": mainScreenOriginY,
  "width": mainScreenSizeX,
  "height": mainScreenSizeY + "/2",
  "screen": screens["mainScreen"]
});

var mainScreenTopRightOperation = slate.operation("move", {
  "x": mainScreenOriginX + " + (" + mainScreenSizeX + "/2)",
  "y": mainScreenOriginY,
  "width": mainScreenSizeX + "/2",
  "height": mainScreenSizeY + "/2",
  "screen": screens["mainScreen"]
});

var mainScreenLeftOperation = slate.operation("move", {
  "x": mainScreenOriginX,
  "y": mainScreenOriginY,
  "width": mainScreenSizeX + "/2",
  "height": mainScreenSizeY,
  "screen": screens["mainScreen"]
});

var mainScreenOperation = slate.operation("move", {
  "x": mainScreenOriginX,
  "y": mainScreenOriginY,
  "width": mainScreenSizeX,
  "height": mainScreenSizeY,
  "screen": screens["mainScreen"]
});

var mainScreenRightOperation = slate.operation("move", {
  "x": mainScreenOriginX + " + (" + mainScreenSizeX + "/2)",
  "y": mainScreenOriginY,
  "width": mainScreenSizeX + "/2",
  "height": mainScreenSizeY,
  "screen": screens["mainScreen"]
});

var mainScreenBottomLeftOperation = slate.operation("move", {
  "x": mainScreenOriginX,
  "y": mainScreenOriginY + " + (" + mainScreenSizeY + "/2)",
  "width": mainScreenSizeX + "/2",
  "height": mainScreenSizeY + "/2",
  "screen": screens["mainScreen"]
});

var mainScreenBottomOperation = slate.operation("move", {
  "x": mainScreenOriginX,
  "y": mainScreenOriginY + " + (" + mainScreenSizeY + "/2)",
  "width": mainScreenSizeX,
  "height": mainScreenSizeY + "/2",
  "screen": screens["mainScreen"]
});

var mainScreenBottomRightOperation = slate.operation("move", {
  "x": mainScreenOriginX + " + (" + mainScreenSizeX + "/2)",
  "y": mainScreenOriginY + " + (" + mainScreenSizeY + "/2)",
  "width": mainScreenSizeX + "/2",
  "height": mainScreenSizeY + "/2",
  "screen": screens["mainScreen"]
});

var tvbSeatScreenTopLeftOperation = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenTopOperation = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY / 2",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenTopRightOperation = slate.operation("move", {
  "x": "screenOriginX + (screenSizeX/2)",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenLeftOperation = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenOperation = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenRightOperation = slate.operation("move", {
  "x": "screenOriginX + (screenSizeX/2)",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenBottomLeftOperation = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY + (screenSizeY/2)",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenBottomOperation = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY + (screenSizeY/2)",
  "width": "screenSizeX",
  "height": "screenSizeY / 2",
  "screen": screens["tvbSeatScreen"]
});

var tvbSeatScreenBottomRightOperation = slate.operation("move", {
  "x": "screenOriginX + (screenSizeX/2)",
  "y": "screenOriginY + (screenSizeY/2)",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screens["tvbSeatScreen"]
});

var appConfigurations = {
  "Terminal": {
    "common": {
      "operations": [
        slate.operation("move", {
          "x": "screenOriginX + screenSizeX / 2",
          "y": "screenOriginY",
          "width": "screenSizeX / 2",
          "height": "screenSizeY / 2",
          "screen": screens["mainScreen"]
        })
      ],
      "repeat": true
    }
  },
  "Google Chrome": {
    "common": {
      "operations": [mainScreenOperation],
      "repeat": true
    }
  },
  "Safari": {
    "common": {
      "operations": [mainScreenOperation],
      "repeat": true
    }
  },
  "Sublime Text": {
    "common": {
      "repeat": true
    },
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  },
  "iTunes": {
    "common": {
      "operations": [
        function(windowObject) {
          var title = windowObject.title();
          switch (title) {
            case "iTunes":
              windowObject.doOperation(mainScreenOperation);
              break;
            case "MiniPlayer":
              windowObject.doOperation(mainScreenLyricOverlayOperation);
              break;
          };
        }
      ],
      "repeat": true,
      "ignore-fail": true,
      "title-order": ["iTunes", "MiniPlayer"]
    }
  },
  "SourceTree": {
    "common": {
      "repeat": true
    },
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  },
  "Calendar": {
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  },
  "Mail": {
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  },
  "ChitChat": {
    "common": {
      "repeat": true
    },
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  },
  "Line": { // seems not working...
    "common": {
      "repeat": true
    },
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  },
  "Xcode": {
    "common": {
      "repeat": true
    },
    "mainScreen": {
      "operations": [mainScreenOperation]
    },
    "tvbSeatScreen": {
      "operations": [tvbSeatScreenOperation]
    }
  }
};

var screensConfigs = {};
for (var screenName in screens) {
  screensConfigs[screenName] = {};
}
for (var appName in appConfigurations) {
  var common = appConfigurations[appName]["common"] || {};
  for (var screenName in screens) {
    var screenConfig = _.extend({}, common, appConfigurations[appName][screenName] || {});
    screensConfigs[screenName][appName] = screenConfig;
  }
}

var mainScreenLayout = slate.layout("mainScreenLayout", screensConfigs["mainScreen"]);
var mainScreenLayoutOperation = slate.operation("layout", { "name": mainScreenLayout });
slate.default([mainScreen], mainScreenLayout);

var tvbSeatScreenLayout = slate.layout("tvbSeatScreenLayout", screensConfigs["tvbSeatScreen"]);
var tvbSeatScreenLayoutOperation = slate.operation("layout", { "name": tvbSeatScreenLayout });
slate.default([mainScreen, tvbSeatScreen], tvbSeatScreenLayout);

slate.bindAll({
  "r:alt": gridOperation,

  "q:alt,shift": mainScreenTopLeftOperation,
  "w:alt,shift": mainScreenTopOperation,
  "e:alt,shift": mainScreenTopRightOperation,
  "a:alt,shift": mainScreenLeftOperation,
  "s:alt,shift": mainScreenOperation,
  "d:alt,shift": mainScreenRightOperation,
  "z:alt,shift": mainScreenBottomLeftOperation,
  "x:alt,shift": mainScreenBottomOperation,
  "c:alt,shift": mainScreenBottomRightOperation,

  "q:alt,cmd,shift": tvbSeatScreenTopLeftOperation,
  "w:alt,cmd,shift": tvbSeatScreenTopOperation,
  "e:alt,cmd,shift": tvbSeatScreenTopRightOperation,
  "a:alt,cmd,shift": tvbSeatScreenLeftOperation,
  "s:alt,cmd,shift": tvbSeatScreenOperation,
  "d:alt,cmd,shift": tvbSeatScreenRightOperation,
  "z:alt,cmd,shift": tvbSeatScreenBottomLeftOperation,
  "x:alt,cmd,shift": tvbSeatScreenBottomOperation,
  "c:alt,cmd,shift": tvbSeatScreenBottomRightOperation,

  "1:alt,shift": mainScreenLayoutOperation,
  "2:alt,shift": tvbSeatScreenLayoutOperation
});

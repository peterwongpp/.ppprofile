slate.configAll({
  "defaultToCurrentScreen": true,
  "checkDefaultsOnLoad": true,
  "orderScreensLeftToRight": true
});

var mainScreen    = "1440x900";
var tvbSeatScreen = "1680x1050";
var screenOf = function(screenName) {
  if (screenName == "main") {
    return mainScreen;
  } else if (screenName == "tvbSeatScreen") {
    return tvbSeatScreen;
  }

  return mainScreen;
}

var lyricDisplay = {
  "x": "(screenSizeX - 280)",
  "y": 46,
  "width": 360,
  "height": "(screenSizeY - 46)"
}

var gridsParams = {};
var grids = { "width": 6, "height": 6 };
gridsParams[mainScreen] = grids;
gridsParams[tvbSeatScreen] = grids;
var gridOperation = slate.operation("grid", {
  "grids": gridsParams,
  "padding": 5
});

var fullScreenOperation = slate.operation("corner", {
  "direction": "top-left",
  "width": "screenSizeX",
  "height": "screenSizeY",
  "screen": screenOf("main")
});

var fullScreenLeftOperation = slate.operation("corner", {
  "direction": "top-left",
  "width": "screenSizeX / 2",
  "height": "screenSizeY",
  "screen": screenOf("main")
});
var fullScreenRightOperation = slate.operation("corner", {
  "direction": "top-right",
  "width": "screenSizeX / 2",
  "height": "screenSizeY",
  "screen": screenOf("main")
});
var fullScreenTopOperation = slate.operation("corner", {
  "direction": "top-left",
  "width": "screenSizeX",
  "height": "screenSizeY / 2",
  "screen": screenOf("main")
});
var fullScreenBottomOperation = slate.operation("corner", {
  "direction": "bottom-left",
  "width": "screenSizeX",
  "height": "screenSizeY / 2",
  "screen": screenOf("main")
});
var fullScreenTopLeftOperation = slate.operation("corner", {
  "direction": "top-left",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screenOf("main")
});
var fullScreenTopRightOperation = slate.operation("corner", {
  "direction": "top-right",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screenOf("main")
});
var fullScreenBottomLeftOperation = slate.operation("corner", {
  "direction": "bottom-left",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screenOf("main")
});
var fullScreenBottomRightOperation = slate.operation("corner", {
  "direction": "bottom-right",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2",
  "screen": screenOf("main")
});

var lyricDisplayOriginX       = "screenOriginX";
var lyricDisplayOriginXMiddle = "(" + lyricDisplayOriginX + ") + ((screenSizeX - " + lyricDisplay["width"] + " ) / 2)";
var lyricDisplayOriginY       = "screenOriginY";
var lyricDisplayOriginYMiddle = "(" + lyricDisplayOriginY + ") + (screenSizeY / 2)";
var lyricDisplaySizeX     = "screenSizeX - " + lyricDisplay["width"];
var lyricDisplaySizeXHalf = "(" + lyricDisplaySizeX + ") / 2";
var lyricDisplaySizeY     = "screenSizeY";
var lyricDisplaySizeYHalf = lyricDisplaySizeY + " / 2";

var lyricDisplayFullScreenOperation = slate.operation("move", {
  "x": lyricDisplayOriginX,
  "y": lyricDisplayOriginY,
  "width": lyricDisplaySizeX,
  "height": lyricDisplaySizeY,
  "screen": screenOf("tvbSeatScreen")
});

var lyricDisplayLyricOverlapOperation = slate.operation("move", {
  "x": "screenOriginX + " + lyricDisplaySizeX,
  "y": "screenOriginY",
  "width": lyricDisplay["width"],
  "height": "screenSizeY",
  "screen": screenOf("tvbSeatScreen")
});

var lyricDisplayLeftOperation = slate.operation("move", {
  "x": lyricDisplayOriginX,
  "y": lyricDisplayOriginY,
  "width": lyricDisplaySizeXHalf,
  "height": lyricDisplaySizeY,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayRightOperation = slate.operation("move", {
  "x": lyricDisplayOriginXMiddle,
  "y": lyricDisplayOriginY,
  "width": lyricDisplaySizeXHalf,
  "height": lyricDisplaySizeY,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayTopOperation = slate.operation("move", {
  "x": lyricDisplayOriginX,
  "y": lyricDisplayOriginY,
  "width": lyricDisplaySizeX,
  "height": lyricDisplaySizeYHalf,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayBottomOperation = slate.operation("move", {
  "x": lyricDisplayOriginX,
  "y": lyricDisplayOriginYMiddle,
  "width": lyricDisplaySizeX,
  "height": lyricDisplaySizeYHalf,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayTopLeftOperation = slate.operation("move", {
  "x": lyricDisplayOriginX,
  "y": lyricDisplayOriginY,
  "width": lyricDisplaySizeXHalf,
  "height": lyricDisplaySizeYHalf,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayTopRightOperation = slate.operation("move", {
  "x": lyricDisplayOriginXMiddle,
  "y": lyricDisplayOriginY,
  "width": lyricDisplaySizeXHalf,
  "height": lyricDisplaySizeYHalf,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayBottomLeftOperation = slate.operation("move", {
  "x": lyricDisplayOriginX,
  "y": lyricDisplayOriginYMiddle,
  "width": lyricDisplaySizeXHalf,
  "height": lyricDisplaySizeYHalf,
  "screen": screenOf("tvbSeatScreen")
});
var lyricDisplayBottomRightOperation = slate.operation("move", {
  "x": lyricDisplayOriginXMiddle,
  "y": lyricDisplayOriginYMiddle,
  "width": lyricDisplaySizeXHalf,
  "height": lyricDisplaySizeYHalf,
  "screen": screenOf("tvbSeatScreen")
});

var mainScreenLayout = slate.layout("mainScreenLayout", {
  "Terminal": {
    "operations": [fullScreenTopRightOperation],
    "repeat": true
  },
  "Google Chrome": {
    "operations": [fullScreenOperation],
    "repeat": true
  },
  "Sublime Text": {
    "operations": [fullScreenOperation],
    "repeat": true
  },
  "iTunes": {
    "operations": [fullScreenOperation],
    "repeat": true,
    "title-order": ["iTunes", "MiniPlayer"]
  },
  "SourceTree": {
    "operations": [fullScreenOperation],
    "repeat": true
  },
  "Xcode": {
    "operations": [fullScreenOperation]
  },
  "Calendar": {
    "operations": [fullScreenOperation]
  },
  "Evernote": {
    "operations": [fullScreenOperation]
  }
});
var mainScreenLayoutOperation = slate.operation("layout", { "name": mainScreenLayout })

var tvbSeatLayout = slate.layout("tvbSeatLayout", {
  "Terminal": {
    "operations": [fullScreenTopRightOperation],
    "repeat": true
  },
  "Google Chrome": {
    "operations": [fullScreenOperation],
    "repeat": true,
  },
  "Sublime Text": {
    "operations": [lyricDisplayFullScreenOperation],
    "repeat": true
  },
  "iTunes": {
    "operations": [
      function(windowObject) {
        var title = windowObject.title();
        switch (title) {
          case "iTunes":
            windowObject.doOperation(fullScreenOperation);
            break;
          case "MiniPlayer":
            windowObject.doOperation(lyricDisplayLyricOverlapOperation);
            break;
        };
      }
    ],
    "ignore-fail": true,
    "repeat": true
  },
  "SourceTree": {
    "operations": [lyricDisplayFullScreenOperation],
    "repeat": true
  },
  "Xcode": {
    "operations": [lyricDisplayFullScreenOperation]
  },
  "Calendar": {
    "operations": [lyricDisplayFullScreenOperation]
  },
  "Evernote": {
    "operations": [fullScreenOperation]
  }
});
var tvbSeatLayoutOperation = slate.operation("layout", { "name": tvbSeatLayout });

slate.default([mainScreen], mainScreenLayout);
slate.default([mainScreen, tvbSeatScreen], tvbSeatLayout);

slate.bindAll({
  "r:alt": gridOperation,

  "1:alt,shift": mainScreenLayoutOperation,
  "2:alt,shift": tvbSeatLayoutOperation,

  "q:alt,shift": fullScreenTopLeftOperation,
  "w:alt,shift": fullScreenTopOperation,
  "e:alt,shift": fullScreenTopRightOperation,
  "a:alt,shift": fullScreenLeftOperation,
  "s:alt,shift": fullScreenOperation,
  "d:alt,shift": fullScreenRightOperation,
  "z:alt,shift": fullScreenBottomLeftOperation,
  "x:alt,shift": fullScreenBottomOperation,
  "c:alt,shift": fullScreenBottomRightOperation,

  "q:alt,cmd,shift": lyricDisplayTopLeftOperation,
  "w:alt,cmd,shift": lyricDisplayTopOperation,
  "e:alt,cmd,shift": lyricDisplayTopRightOperation,
  "a:alt,cmd,shift": lyricDisplayLeftOperation,
  "s:alt,cmd,shift": lyricDisplayFullScreenOperation,
  "d:alt,cmd,shift": lyricDisplayRightOperation,
  "z:alt,cmd,shift": lyricDisplayBottomLeftOperation,
  "x:alt,cmd,shift": lyricDisplayBottomOperation,
  "c:alt,cmd,shift": lyricDisplayBottomRightOperation
});

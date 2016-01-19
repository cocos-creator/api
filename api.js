window.apimeta = {
  "enums": [
    {
      "name": "Button.Transition",
      "namespace": "cc.Button.Transition",
      "module": "cc",
      "description": "<p>Enum for transition type</p>\n"
    },
    {
      "name": "DebugMode",
      "namespace": "cc.DebugMode",
      "module": "cc",
      "description": "<p>Enum for debug modes.</p>\n"
    },
    {
      "name": "KEY",
      "namespace": "cc.KEY",
      "module": "cc",
      "description": "<p>Key map for keyboard event</p>\n"
    },
    {
      "name": "Layout.HorizontalDirection",
      "namespace": "cc.Layout.HorizontalDirection",
      "module": "cc",
      "description": "<p>Enum for horizontal layout direction.</p>\n"
    },
    {
      "name": "Layout.Type",
      "namespace": "cc.Layout.Type",
      "module": "cc",
      "description": "<p>Enum for Layout type</p>\n"
    },
    {
      "name": "Layout.VerticalDirection",
      "namespace": "cc.Layout.VerticalDirection",
      "module": "cc",
      "description": "<p>Enum for vertical layout direction.</p>\n"
    },
    {
      "name": "ProgressBar.Mode",
      "namespace": "cc.ProgressBar.Mode",
      "module": "cc",
      "description": "<p>Enum for ProgressBar mode</p>\n"
    },
    {
      "name": "Scrollbar.Direction",
      "namespace": "cc.Scrollbar.Direction",
      "module": "cc",
      "description": "<p>Enum for Scrollbar direction</p>\n"
    },
    {
      "name": "SpriteType",
      "namespace": "cc.SpriteType",
      "module": "cc",
      "description": "<p>Enum for sprite type</p>\n"
    },
    {
      "name": "TextAlignment",
      "namespace": "cc.TextAlignment",
      "module": "cc",
      "description": "<p>Enum for text alignment</p>\n"
    },
    {
      "name": "UIOrientation",
      "namespace": "cc.UIOrientation",
      "module": "cc",
      "description": "<p>Enum for UIOrientation.</p>\n"
    },
    {
      "name": "VerticalTextAlignment",
      "namespace": "cc.VerticalTextAlignment",
      "module": "cc",
      "description": "<p>Enum for vertical text alignment</p>\n"
    },
    {
      "name": "WrapMode",
      "namespace": "cc.WrapMode",
      "module": "cc",
      "description": "<p>Specifies how time is treated when it is outside of the keyframe range of an Animation.</p>\n"
    }
  ],
  "classes": [
    {
      "name": "Acceleration",
      "namespace": "cc.Acceleration",
      "module": "cc",
      "description": "<p><p>the device accelerometer reports values for each axis in units of g-force.</p></p>\n"
    },
    {
      "name": "Action",
      "namespace": "cc.Action",
      "module": "cc",
      "description": "<p><p><p><p><p><p><p><p>Base class cc.Action for action classes.</p></p></p></p></p></p></p></p>\n"
    },
    {
      "name": "ActionEase",
      "namespace": "cc.ActionEase",
      "module": "cc",
      "description": "<p>Base class for Easing actions</p>\n"
    },
    {
      "name": "ActionInstant",
      "namespace": "cc.ActionInstant",
      "module": "cc",
      "description": "<p>Instant actions are immediate actions. They don't have a duration like the ActionInterval actions.</p>\n"
    },
    {
      "name": "ActionInterval",
      "namespace": "cc.ActionInterval",
      "module": "cc",
      "description": "<p><p> An interval action is an action that takes place within a certain period of time. <br/>\nIt has an start time, and a finish time. The finish time is the parameter<br/>\nduration plus the start time.</p></p>\n<p><p>These CCActionInterval actions have some interesting properties, like:<br/></p>\n<ul>\n<li>They can run normally (default)  <br/></li>\n<li>They can run reversed with the reverse method   <br/></li>\n<li>They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p></li>\n</ul>\n<p><p>For example, you can simulate a Ping Pong effect running the action normally and<br/>\nthen running it again in Reverse mode. </p></p>\n"
    },
    {
      "name": "ActionManager",
      "namespace": "cc.ActionManager",
      "module": "cc",
      "description": "<p>cc.ActionManager is a class that can manage actions.<br/>\nNormally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,\nwhich uses this class's singleton object.\nBut there are some cases where you might need to use this class. <br/>\nExamples:<br/></p>\n<ul>\n<li>When you want to run an action where the target is different from a CCNode.<br/></li>\n<li>When you want to pause / resume the actions<br/></li>\n</ul>\n"
    },
    {
      "name": "AffineTransform",
      "namespace": "cc.AffineTransform",
      "module": "cc",
      "description": "<p><p>cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>\nPlease do not use its constructor directly, use cc.affineTransformMake alias function instead.\n</p></p>\n"
    },
    {
      "name": "Animation",
      "namespace": "cc.Animation",
      "module": "cc",
      "description": ""
    },
    {
      "name": "AnimationClip",
      "namespace": "cc.AnimationClip",
      "module": "cc",
      "description": "<p><p>Class for animation data handling.</p></p>\n"
    },
    {
      "name": "AnimationNode",
      "namespace": "cc.AnimationNode",
      "module": "cc",
      "description": "<p><p>The collection and instance of playing animations created by entity.animate.</p></p>\n"
    },
    {
      "name": "AnimationState",
      "namespace": "cc.AnimationState",
      "module": "cc",
      "description": "<p><p>The AnimationState gives full control over animation playback process.\nIn most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.</p></p>\n"
    },
    {
      "name": "Asset",
      "namespace": "cc.Asset",
      "module": "cc",
      "description": "<p><p>Base class for handling assets used in Fireball. This class can be instantiate.</p>\n<p>You may want to override:</p>\n<ul>\n<li>createNode</li>\n<li>cc.Object._serialize</li>\n<li>cc.Object._deserialize</li>\n</ul></p>\n"
    },
    {
      "name": "AssetLibrary",
      "namespace": "cc.AssetLibrary",
      "module": "cc",
      "description": "<p>The asset library which managing loading/unloading assets in project.</p>\n"
    },
    {
      "name": "AudioClip",
      "namespace": "cc.AudioClip",
      "module": "cc",
      "description": "<p><p>Class for audio data handling.</p></p>\n"
    },
    {
      "name": "AudioScource",
      "namespace": "cc.AudioScource",
      "module": "cc",
      "description": "<p>Audio Source.</p>\n"
    },
    {
      "name": "BitmapFont",
      "namespace": "cc.BitmapFont",
      "module": "cc",
      "description": "<p><p>Class for BitmapFont handling.</p></p>\n"
    },
    {
      "name": "BlendFunc",
      "namespace": "cc.BlendFunc",
      "module": "cc",
      "description": "<p><p>Blend Function used for textures.</p></p>\n"
    },
    {
      "name": "Button",
      "namespace": "cc.Button",
      "module": "cc",
      "description": "<p>Button has 3 Transition types\nWhen Button state changed:\nIf Transition type is Button.Transition.NONE, Button will do nothing\nIf Transition type is Button.Transition.COLOR, Button will change target's color\nIf Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite</p>\n<p>Button will trigger 5 events:\nButton.EVENT_TOUCH_DOWN\nButton.EVENT_TOUCH_UP\nButton.EVENT_HOVER_IN\nButton.EVENT_HOVER_MOVE\nButton.EVENT_HOVER_OUT</p>\n"
    },
    {
      "name": "Button.ClickEvent",
      "namespace": "cc.Button.ClickEvent",
      "module": "cc",
      "description": "<p>Click event will register a event to target component's handler.\nAnd will trigger when a click event emit</p>\n"
    },
    {
      "name": "CallbacksInvoker",
      "namespace": "cc.CallbacksInvoker",
      "module": "cc",
      "description": "<p><p>The callbacks invoker to handle and invoke callbacks by key</p></p>\n"
    },
    {
      "name": "Canvas",
      "namespace": "cc.Canvas",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Class",
      "namespace": "cc.Class",
      "module": "cc",
      "description": "<p>Defines a FireClass using the given specification, please see <a href=\"/en/scripting/class/\">Class</a> for details.</p>\n"
    },
    {
      "name": "CoffeeScript",
      "namespace": "cc.CoffeeScript",
      "module": "cc",
      "description": "<p><p>Class for coffee script handling.</p></p>\n"
    },
    {
      "name": "Color",
      "namespace": "cc.Color",
      "module": "cc",
      "description": "<p><p>Representation of RGBA colors.</p>\n<p>Each color component is a floating point value with a range from 0 to 1.</p>\n<p>You can also use the convenience method <% crosslink cc.fireColor cc.fireColor %> to create a new Color.</p></p>\n"
    },
    {
      "name": "Component",
      "namespace": "cc.Component",
      "module": "cc",
      "description": "<p><p>Base class for everything attached to Node(Entity).</p>\n<p>NOTE: Not allowed to use construction parameters for Component's subclasses,\nbecause Component is created by the engine.</p></p>\n"
    },
    {
      "name": "ContainerStrategy",
      "namespace": "cc.ContainerStrategy",
      "module": "cc",
      "description": "<p><p>cc.ContainerStrategy class is the root strategy class of container's scale strategy,\nit controls the behavior of how to scale the cc.container and cc.game.canvas object</p></p>\n"
    },
    {
      "name": "ContentStrategy",
      "namespace": "cc.ContentStrategy",
      "module": "cc",
      "description": "<p><p>cc.ContentStrategy class is the root strategy class of content's scale strategy,\nit controls the behavior of how to scale the scene and setup the viewport for the game</p></p>\n"
    },
    {
      "name": "Details",
      "namespace": "cc.Details",
      "module": "cc",
      "description": "<p><p>Contains information collected during deserialization</p></p>\n"
    },
    {
      "name": "EaseBounce",
      "namespace": "cc.EaseBounce",
      "module": "cc",
      "description": "<p>cc.EaseBounce abstract class.</p>\n"
    },
    {
      "name": "EaseElastic",
      "namespace": "cc.EaseElastic",
      "module": "cc",
      "description": "<p>Ease Elastic abstract class.</p>\n"
    },
    {
      "name": "EaseRateAction",
      "namespace": "cc.EaseRateAction",
      "module": "cc",
      "description": "<p>Base class for Easing actions with rate parameters</p>\n"
    },
    {
      "name": "EqualToFrame",
      "namespace": "cc.EqualToFrame",
      "module": "cc",
      "description": ""
    },
    {
      "name": "EqualToWindow",
      "namespace": "cc.EqualToWindow",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Event",
      "namespace": "cc.Event",
      "module": "cc",
      "description": "<p><p><p><p><p><p><p><p>Base class of all kinds of events.</p></p></p></p></p></p></p></p>\n"
    },
    {
      "name": "Event.EventAcceleration",
      "namespace": "cc.Event.EventAcceleration",
      "module": "cc",
      "description": "<p><p>The acceleration event</p></p>\n"
    },
    {
      "name": "Event.EventCustom",
      "namespace": "cc.Event.EventCustom",
      "module": "cc",
      "description": "<p><p>The Custom event</p></p>\n"
    },
    {
      "name": "Event.EventFocus",
      "namespace": "cc.Event.EventFocus",
      "module": "cc",
      "description": "<p><p>Focus change event for UI widget</p></p>\n"
    },
    {
      "name": "Event.EventKeyboard",
      "namespace": "cc.Event.EventKeyboard",
      "module": "cc",
      "description": "<p><p>The keyboard event</p></p>\n"
    },
    {
      "name": "Event.EventMouse",
      "namespace": "cc.Event.EventMouse",
      "module": "cc",
      "description": "<p><p>The mouse event</p></p>\n"
    },
    {
      "name": "Event.EventTouch",
      "namespace": "cc.Event.EventTouch",
      "module": "cc",
      "description": "<p><p>The touch event</p></p>\n"
    },
    {
      "name": "EventAnimCurve",
      "namespace": "cc.EventAnimCurve",
      "module": "cc",
      "description": ""
    },
    {
      "name": "EventInfo",
      "namespace": "cc.EventInfo",
      "module": "cc",
      "description": "<p><p>Event information,</p></p>\n"
    },
    {
      "name": "EventListener",
      "namespace": "cc.EventListener",
      "module": "cc",
      "description": "<p><p>\nThe base class of event listener.                                                                        <br/>\nIf you need custom listener which with different callback, you need to inherit this class.               <br/>\nFor instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>\nEventListenerTouchOneByOne, EventListenerCustom.\n</p></p>\n"
    },
    {
      "name": "EventTarget",
      "namespace": "cc.EventTarget",
      "module": "cc",
      "description": "<p>EventTarget is an object to which an event is dispatched when something has occurred.\nEntity are the most common event targets, but other objects can be event targets too.</p>\n<p>Event targets are an important part of the Fireball event model.\nThe event target serves as the focal point for how events flow through the scene graph.\nWhen an event such as a mouse click or a keypress occurs, Fireball dispatches an event object\ninto the event flow from the root of the hierarchy. The event object then makes its way through\nthe scene graph until it reaches the event target, at which point it begins its return trip through\nthe scene graph. This round-trip journey to the event target is conceptually divided into three phases:</p>\n<ul>\n<li>The capture phase comprises the journey from the root to the last node before the event target's node</li>\n<li>The target phase comprises only the event target node</li>\n<li>The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree\nSee also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow</li>\n</ul>\n<p>Event targets can implement the following methods:</p>\n<ul>\n<li>_getCapturingTargets</li>\n<li>_getBubblingTargets</li>\n</ul>\n"
    },
    {
      "name": "FiniteTimeAction",
      "namespace": "cc.FiniteTimeAction",
      "module": "cc",
      "description": "<p>Base class actions that do have a finite time duration. <br/>\nPossible actions: <br/></p>\n<ul>\n<li>An action with a duration of 0 seconds. <br/></li>\n<li>An action with a duration of 35.5 seconds.</li>\n</ul>\n<p>Infinite time actions are valid</p>\n"
    },
    {
      "name": "Font",
      "namespace": "cc.Font",
      "module": "cc",
      "description": "<p><p>Class for Font handling.</p></p>\n"
    },
    {
      "name": "FontDefinition",
      "namespace": "cc.FontDefinition",
      "module": "cc",
      "description": "<p><p>Common usage:</p>\n<p>var fontDef = new cc.FontDefinition();\nfontDef.fontName = \"Arial\";\nfontDef.fontSize = 12;\n...</p>\n<p>OR using inline definition usefull for constructor injection</p>\n<p>var fontDef = new cc.FontDefinition({\nfontName: \"Arial\",\nfontSize: 12\n});</p></p>\n"
    },
    {
      "name": "HashElement",
      "namespace": "cc.HashElement",
      "module": "cc",
      "description": ""
    },
    {
      "name": "HashTimerEntry",
      "namespace": "cc.HashTimerEntry",
      "module": "cc",
      "description": "<p>Hash Element used for \"selectors with interval\"</p>\n"
    },
    {
      "name": "HashUpdateEntry",
      "namespace": "cc.HashUpdateEntry",
      "module": "cc",
      "description": "<p>A update entry list</p>\n"
    },
    {
      "name": "Label",
      "namespace": "cc.Label",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Layout",
      "namespace": "cc.Layout",
      "module": "cc",
      "description": "<p>The Layout is a container component, use it to arrange child elements easily.</p>\n"
    },
    {
      "name": "ListEntry",
      "namespace": "cc.ListEntry",
      "module": "cc",
      "description": "<p>A list double-linked list used for \"updates with priority\"</p>\n"
    },
    {
      "name": "Mask",
      "namespace": "cc.Mask",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Menu",
      "namespace": "Editor.Menu",
      "module": "Editor",
      "description": ""
    },
    {
      "name": "Node",
      "namespace": "cc.Node",
      "module": "cc",
      "description": "<p>Class of all entities in Fireball scenes.</p>\n"
    },
    {
      "name": "Node.EventType",
      "namespace": "cc.Node.EventType",
      "module": "cc",
      "description": "<p>The event type supported by Node</p>\n"
    },
    {
      "name": "OriginalContainer",
      "namespace": "cc.OriginalContainer",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Playable",
      "namespace": "cc.Playable",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Prefab",
      "namespace": "cc.Prefab",
      "module": "cc",
      "description": "<p><p>Class for prefab handling.</p></p>\n"
    },
    {
      "name": "ProgressBar",
      "namespace": "cc.ProgressBar",
      "module": "cc",
      "description": "<p>Visual indicator of progress in some operation. Displays a bar to the user representing how far the operation has progressed</p>\n"
    },
    {
      "name": "ProportionalToFrame",
      "namespace": "cc.ProportionalToFrame",
      "module": "cc",
      "description": ""
    },
    {
      "name": "ProportionalToWindow",
      "namespace": "cc.ProportionalToWindow",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Quad2",
      "namespace": "cc.Quad2",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Quad3",
      "namespace": "cc.Quad3",
      "module": "cc",
      "description": "<p>A 3D Quad. 4 * 3 floats</p>\n"
    },
    {
      "name": "RawAsset",
      "namespace": "cc.RawAsset",
      "module": "cc",
      "description": "<p>The base class for registering asset types.</p>\n<p>You may want to override:</p>\n<ul>\n<li>createNode (static)</li>\n</ul>\n"
    },
    {
      "name": "Rect",
      "namespace": "cc.Rect",
      "module": "cc",
      "description": "<p><p>A 2D rectangle defined by x, y position and width, height.</p>\n<p>see {% crosslink cc.Rect cc.rect %}</p></p>\n"
    },
    {
      "name": "ResolutionPolicy",
      "namespace": "cc.ResolutionPolicy",
      "module": "cc",
      "description": "<p><p>cc.ResolutionPolicy class is the root strategy class of scale strategy,\nits main task is to maintain the compatibility with Cocos2d-x</p></p>\n"
    },
    {
      "name": "SampledAnimCurve",
      "namespace": "cc.SampledAnimCurve",
      "module": "cc",
      "description": "<p><p>SampledAnimCurve, 这里面的数值需要是已经都预先sample好了的,\n所以 SampledAnimCurve 中查找 frame index 的速度会非常快</p></p>\n"
    },
    {
      "name": "Scene",
      "namespace": "cc.Scene",
      "module": "cc",
      "description": "<p><p>Class for scene handling.</p></p>\n"
    },
    {
      "name": "Scheduler",
      "namespace": "cc.Scheduler",
      "module": "cc",
      "description": "<p><p>\nScheduler is responsible of triggering the scheduled callbacks.<br/>\nYou should not use NSTimer. Instead use this class.<br/>\n<br/>\nThere are 2 different types of callbacks (selectors):<br/>\n- update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>\n- custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>\n<br/>\nThe 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'. *\n</p></p>\n"
    },
    {
      "name": "ScrollView",
      "namespace": "cc.ScrollView",
      "module": "cc",
      "description": "<p>Layout container for a view hierarchy that can be scrolled by the user,\nallowing it to be larger than the physical display.</p>\n"
    },
    {
      "name": "Scrollbar",
      "namespace": "cc.Scrollbar",
      "module": "cc",
      "description": "<p>The Scrollbar control allows the user to scroll an image or other view that is too large to see completely</p>\n"
    },
    {
      "name": "Size",
      "namespace": "cc.Size",
      "module": "cc",
      "description": "<p>cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.\nIt will be deprecated soon, please use cc.Vec2 instead</p>\n"
    },
    {
      "name": "Sprite",
      "namespace": "cc.Sprite",
      "module": "cc",
      "description": "<p>Renders a sprite in the scene.</p>\n"
    },
    {
      "name": "SpriteAnimationAsset",
      "namespace": "cc.SpriteAnimationAsset",
      "module": "cc",
      "description": "<p><p>Class for sprite animation asset handling.</p></p>\n"
    },
    {
      "name": "SpriteAtlas",
      "namespace": "cc.SpriteAtlas",
      "module": "cc",
      "description": "<p><p>Class for sprite atlas handling.</p></p>\n"
    },
    {
      "name": "SpriteFrame",
      "namespace": "cc.SpriteFrame",
      "module": "cc",
      "description": "<p><p><p>\nA cc.SpriteFrame has:<br/></p>\n<ul>\n<li>texture: A cc.Texture2D that will be used by the _ccsg.Sprite<br/></li>\n<li>rectangle: A rectangle of the texture<br/>\n<br/>\nYou can modify the frame of a _ccsg.Sprite by doing:<br/>\n</p></p></li>\n</ul>\n"
    },
    {
      "name": "TTFFont",
      "namespace": "cc.TTFFont",
      "module": "cc",
      "description": "<p><p>Class for TTFFont handling.</p></p>\n"
    },
    {
      "name": "Tex2F",
      "namespace": "cc.Tex2F",
      "module": "cc",
      "description": ""
    },
    {
      "name": "TextAsset",
      "namespace": "cc.TextAsset",
      "module": "cc",
      "description": "<p><p>Class for text file.</p></p>\n"
    },
    {
      "name": "Texture2D",
      "namespace": "cc.Texture2D",
      "module": "cc",
      "description": "<p><p>\nThis class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>\nThe created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>\nDepending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>\ni.e. \"contentSize\" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>\nBe aware that the content of the generated textures will be upside-down! </p></p>\n"
    },
    {
      "name": "Texture2D.WrapMode",
      "namespace": "cc.Texture2D.WrapMode",
      "module": "cc",
      "description": "<p>The texture wrap mode</p>\n"
    },
    {
      "name": "TextureAtlas",
      "namespace": "cc.TextureAtlas",
      "module": "cc",
      "description": "<p><p><p>A class that implements a Texture Atlas. <br />\nSupported features: <br />\nThe atlas file can be a PNG, JPG. <br />\nQuads can be updated in runtime <br />\nQuads can be added in runtime <br />\nQuads can be removed in runtime <br />\nQuads can be re-ordered in runtime <br />\nThe TextureAtlas capacity can be increased or decreased in runtime.</p></p></p>\n"
    },
    {
      "name": "TiledMapAsset",
      "namespace": "cc.TiledMapAsset",
      "module": "cc",
      "description": "<p><p>Class for tiled map asset handling.</p></p>\n"
    },
    {
      "name": "Timer",
      "namespace": "cc.Timer",
      "module": "cc",
      "description": "<p>Light weight timer</p>\n"
    },
    {
      "name": "Touch",
      "namespace": "cc.Touch",
      "module": "cc",
      "description": "<p>The touch event class</p>\n"
    },
    {
      "name": "V2F_C4B_T2F",
      "namespace": "cc.V2F_C4B_T2F",
      "module": "cc",
      "description": ""
    },
    {
      "name": "V2F_C4B_T2F_Triangle",
      "namespace": "cc.V2F_C4B_T2F_Triangle",
      "module": "cc",
      "description": ""
    },
    {
      "name": "V3F_C4B_T2F",
      "namespace": "cc.V3F_C4B_T2F",
      "module": "cc",
      "description": ""
    },
    {
      "name": "V3F_C4B_T2F_Quad",
      "namespace": "cc.V3F_C4B_T2F_Quad",
      "module": "cc",
      "description": ""
    },
    {
      "name": "ValueType",
      "namespace": "cc.ValueType",
      "module": "cc",
      "description": "<p><p><p><p><p><p><p><p><p><p><p><p><p><p>The base class of all value types.</p></p></p></p></p></p></p></p></p></p></p></p></p></p>\n"
    },
    {
      "name": "Vec2",
      "namespace": "cc.Vec2",
      "module": "cc",
      "description": "<p><p>Representation of 2D vectors and points.</p>\n<p>see Unknown</p></p>\n"
    },
    {
      "name": "Vertex2F",
      "namespace": "cc.Vertex2F",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Vertex3F",
      "namespace": "cc.Vertex3F",
      "module": "cc",
      "description": ""
    },
    {
      "name": "WebGLColor",
      "namespace": "cc.WebGLColor",
      "module": "cc",
      "description": ""
    },
    {
      "name": "Widget",
      "namespace": "cc.Widget",
      "module": "cc",
      "description": "<p>Stores and manipulate the anchoring based on its parent.\nWidget are used for GUI but can also be used for other things.</p>\n"
    },
    {
      "name": "Window",
      "namespace": "Editor.Window",
      "module": "Editor",
      "description": "<p><p>Window class for operating editor window</p></p>\n"
    },
    {
      "name": "array",
      "namespace": "js.array",
      "module": "js",
      "description": ""
    },
    {
      "name": "director",
      "namespace": "cc.director",
      "module": "cc",
      "description": "<p><p>\nATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>\ncc.director is a singleton object which manage your game's logic flow.<br/>\nSince the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>\nthe standard way to use it is by calling:<br/>\n- cc.director.methodName(); <br/></p>\n<p>It creates and handle the main Window and manages how and when to execute the Scenes.<br/>\n<br/>\nThe cc.director is also responsible for:<br/>\n- initializing the OpenGL context<br/>\n- setting the OpenGL pixel format (default on is RGB565)<br/>\n- setting the OpenGL pixel format (default on is RGB565)<br/>\n- setting the OpenGL buffer depth (default one is 0-bit)<br/></p>\n<ul>\n<li>setting the color for clear screen (default one is BLACK)<br/>\n<ul>\n<li>setting the projection (default one is 3D)<br/></li>\n<li>setting the orientation (default one is Portrait)<br/>\n<br/>\n<br/>\nThe cc.director also sets the default OpenGL context:<br/></li>\n<li>GL_TEXTURE_2D is enabled<br/></li>\n<li>GL_VERTEX_ARRAY is enabled<br/></li>\n<li>GL_COLOR_ARRAY is enabled<br/></li>\n<li>GL_TEXTURE_COORD_ARRAY is enabled<br/>\n</p>\n<p>\ncc.director also synchronizes timers with the refresh rate of the display.<br/>\nFeatures and Limitations:<br/></li>\n<li>Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/></li>\n<li>Only supports animation intervals of 1/60 1/30 & 1/15<br/>\n</p></li>\n</ul>\n</li>\n</ul>\n"
    },
    {
      "name": "eventManager",
      "namespace": "cc.eventManager",
      "module": "cc",
      "description": "<p><p>\ncc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. <br/>\n<br/>\nThe EventListener list is managed in such way so that event listeners can be added and removed          <br/>\nwhile events are being dispatched.\n</p></p>\n"
    },
    {
      "name": "game",
      "namespace": "cc.game",
      "module": "cc",
      "description": "<p>An object to boot the game.</p>\n"
    },
    {
      "name": "inputManager",
      "namespace": "cc.inputManager",
      "module": "cc",
      "description": "<p><p>\nThis class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>\n</p></p>\n"
    },
    {
      "name": "loader",
      "namespace": "cc.loader",
      "module": "cc",
      "description": "<p>Loader for resource loading process. It's a singleton object.</p>\n"
    },
    {
      "name": "pool",
      "namespace": "cc.pool",
      "module": "cc",
      "description": "<p><p>\ncc.pool is a singleton object serves as an object cache pool.<br/>\nIt can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>\nSome common use case is :<br/>\n1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>\n2. Blocks in candy crash (massive creation and recreation)<br/>\netc...\n</p></p>\n"
    },
    {
      "name": "screen",
      "namespace": "cc.screen",
      "module": "cc",
      "description": "<p>The fullscreen API provides an easy way for web content to be presented using the user's entire screen.\nIt's invalid on safari, QQbrowser and android browser</p>\n"
    },
    {
      "name": "spriteFrameCache",
      "namespace": "cc.spriteFrameCache",
      "module": "cc",
      "description": "<p><p>\ncc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.<br/>\n<br/></p>\n"
    },
    {
      "name": "sys",
      "namespace": "cc.sys",
      "module": "cc",
      "description": "<p>System variables</p>\n"
    },
    {
      "name": "textureCache",
      "namespace": "cc.textureCache",
      "module": "cc",
      "description": "<p>cc.textureCache is a singleton object, it's the global cache for cc.Texture2D</p>\n"
    },
    {
      "name": "url",
      "namespace": "cc.url",
      "module": "cc",
      "description": ""
    },
    {
      "name": "view",
      "namespace": "cc.view",
      "module": "cc",
      "description": "<p>cc.view is the singleton object which represents the game window.<br/>\nIt's main task include: <br/></p>\n<ul>\n<li>Apply the design resolution policy<br/></li>\n<li>Provide interaction with the window, like resize event on web, retina display support, etc...<br/></li>\n<li>Manage the game view port which can be different with the window<br/></li>\n<li>Manage the content scale and translation<br/>\n<br/>\nSince the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>\nthe standard way to use it is by calling:<br/></li>\n<li>cc.view.methodName(); <br/></li>\n</ul>\n"
    },
    {
      "name": "visibleRect",
      "namespace": "cc.visibleRect",
      "module": "cc",
      "description": "<p>cc.visibleRect is a singleton object which defines the actual visible rect of the current view,\nit should represent the same rect as cc.view.getViewportRect()</p>\n"
    }
  ],
  "modules": [
    {
      "name": "AssetDB",
      "namespace": "AssetDB",
      "description": ""
    },
    {
      "name": "Editor",
      "namespace": "Editor",
      "description": "<p>Page Level Editor</p>\n"
    },
    {
      "name": "Editor.Debugger",
      "namespace": "Editor.Debugger",
      "description": "<p>The <code>core-level</code> debugger utils, when you turn on the debugger,\nit actually run a <a href=\"https://github.com/node-inspector/node-inspector\">node-inspector</a>\nprocess in the low-level, and you can use your chrome browser debug the core module.</p>\n"
    },
    {
      "name": "Editor.MainMenu",
      "namespace": "Editor.MainMenu",
      "description": "<p>The main menu module for manipulating main menu items</p>\n"
    },
    {
      "name": "Editor.Package",
      "namespace": "Editor.Package",
      "description": "<p>Package module for manipulating packages</p>\n"
    },
    {
      "name": "Editor.Panel",
      "namespace": "Editor.Panel",
      "description": "<p>Panel module for operating specific panel</p>\n"
    },
    {
      "name": "cc",
      "namespace": "cc",
      "description": "<p>The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace</p>\n"
    },
    {
      "name": "js",
      "namespace": "js",
      "description": "<p>This module provides some JavaScript utilities.</p>\n"
    }
  ]
}
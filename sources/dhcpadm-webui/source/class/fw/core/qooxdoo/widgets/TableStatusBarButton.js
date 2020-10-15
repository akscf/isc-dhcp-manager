/**
 * Copyright (C) AlexandrinKS
 * https://akscf.me/
 */
qx.Class.define("fw.core.qooxdoo.widgets.TableStatusBarButton", {
        extend:qx.ui.toolbar.Button,

        construct:function (toolTipText, icon, context, handler) {
            this.base(arguments, null, icon);
            this.setToolTipText((toolTipText ? toolTipText : null));
            if(handler) {
                this.addListener("execute", handler, context, false);
            }
        },

        properties:{
            appearance:{
                refine:true,
                init:"table-statusbar-button"
            }
        },
        members:{

        }
    }
);

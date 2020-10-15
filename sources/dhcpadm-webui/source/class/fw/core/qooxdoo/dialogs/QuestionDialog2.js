/**
 * Copyright (C) AlexandrinKS
 * https://akscf.me/
 */
qx.Class.define("fw.core.qooxdoo.dialogs.QuestionDialog2", {
    extend: fw.core.qooxdoo.dialogs.FormBoxDialog,

    construct: function () {
        this.base(arguments, this.tr("Attention"), fw.core.qooxdoo.res.IconSet.ICON('stdQuestionDialog'));
        this.setHeight(150);
        this.setEnableEscapeDefaultAction();
        this.__initComponents();
    },

    members: {
        __fieldMessage: null,
        __userData: null,

        open: function (captionText, messageText, buttons, userData) {
            this.__userData = userData;
            //
            this.setCaption(captionText ? captionText : this.tr("Attention"));
            this.__fieldMessage.setLabel('<br>' + messageText + "<br><br>");
            //
            this.getButtonsContainer().removeAll();
            //
            var lastButton = null;
            if (buttons == null) {
                lastButton = this.addButton(new fw.core.qooxdoo.widgets.FormSubmitButton(this.tr('Close'), null, this, this.__onQuestionButtonClick));
                lastButton.button_qd_id = -1;
            } else {
                for (var i = 0; i < buttons.length; i++) {
                    lastButton = this.addButton(new fw.core.qooxdoo.widgets.FormSubmitButton(buttons[i], null, this, this.__onQuestionButtonClick));
                    lastButton.button_qd_id = i + 1;
                }
            }
            this.setDefaultFocusWidget(lastButton);
            //
            this.base(arguments);
        },

        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // private
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        __initComponents: function () {
            this.__fieldMessage = new qx.ui.basic.Atom().set({label: "", center: true, rich: true}, null); // font: "bold"
            this.__fieldDontAskAgain = new qx.ui.form.CheckBox(this.tr("Don't ask me again"));
            this.addField(null, this.__fieldMessage);
            this.addField(null, this.__fieldDontAskAgain);

            this.setDialogCloseButton(null);
        },

        __onQuestionButtonClick: function (e) {
            var button = e.getTarget();
            var flag = this.__fieldDontAskAgain.getValue();
            this.closeApprove({button: button.button_qd_id, askFlag: flag , userData: this.__userData});
        }

    }
});
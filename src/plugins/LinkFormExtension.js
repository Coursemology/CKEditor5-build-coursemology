import { Plugin, FormRowView, SwitchButtonView } from 'ckeditor5' ;

/**
 * Implementation mostly inspired by
 * https://github.com/ckeditor/ckeditor5/issues/4836#issuecomment-1422740830,
 * with extension element code taken from CKEditor source code
 */
export default class LinkFormExtension extends Plugin {
  init() {
    const editor = this.editor;
    this.linkUI = editor.plugins.get('LinkUI');
    const contextualBalloonPlugin = editor.plugins.get('ContextualBalloon');

    this.listenTo(contextualBalloonPlugin, 'change:visibleView', (_evt, _name, visibleView) => {
      if (this.linkUI.formView && visibleView === this.linkUI.formView) {
        this.stopListening(contextualBalloonPlugin, 'change:visibleView');

        this.linkFormView = this.linkUI.formView;
        this.buttonRow = this._createButtonRow();

        this.buttonRow.render();
        this.linkFormView.registerChild(this.buttonRow);
        this.linkFormView._focusables.add(this.buttonView);
        this.linkFormView.focusTracker.add(this.buttonView.element);
        this.linkFormView.element.insertBefore(
          this.buttonRow.element, this.linkFormView.children.get(this.linkFormView.children.length - 2).element,
        );
      }
     });
  }

  _createButtonRow() {
    const editor = this.editor;
    const linkCommand = editor.commands.get('link');
    this.buttonView = new SwitchButtonView(this.locale);
    const manualDecorator = linkCommand.manualDecorators.get("linkOpenInNewTab");

    this.buttonView.set({
      label: manualDecorator.label,
      withText: true
    });

    this.buttonView.bind('isOn').toMany([ manualDecorator, linkCommand ], 'value', (decoratorValue, commandValue) => {
      return commandValue === undefined && decoratorValue === undefined ?
        !!manualDecorator.defaultValue :
        !!decoratorValue;
    });

    this.buttonView.on('execute', () => {
      manualDecorator.set('value', !this.buttonView.isOn);
    });

    const row = new FormRowView(this.locale);
    row.registerChild(this.buttonView);
    const originalRender = row.render.bind(row);
    row.render = () => {
      originalRender();
      row.element.appendChild(this.buttonView.element);
    }

    return row;
  }
}

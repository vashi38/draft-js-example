import React from "react";

import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

class DraftJsEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      textAlignment: "left"
    };
  }

  onChange = editorState => {
    this.setState({ editorState }, this.focus);
  };

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  onBoldClick = e => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onTextAlignmentChange = direction => () => {
    console.log(direction);
    this.setState({
      textAlignment: "right"
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    const { textAlignment } = this.state;
    return (
      <div>
        <button type="button" onClick={this.onBoldClick}>
          Bold
        </button>
        <button type="button" onClick={this.onTextAlignmentChange("right")}>
          right
        </button>
        <button type="button" onClick={this.onTextAlignmentChange("left")}>
          left
        </button>
        <button type="button" onClick={this.onTextAlignmentChange("center")}>
          center
        </button>
        {/* <input type="button" onClick={this.onBoldClick} value="bold" /> */}
        <div>
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            textAlignment={textAlignment}
            ref="editor"
          />
        </div>
        <pre>
          {JSON.stringify(
            convertToRaw(this.state.editorState.getCurrentContent()),
            null,
            2
          )}
        </pre>
      </div>
    );
  }
}

export default DraftJsEditor;

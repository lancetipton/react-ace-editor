import React, { Component } from 'react'
import PropTypes from 'prop-types'

const isBrowser = typeof window !== 'undefined'
let ace

if (isBrowser){
  ace = require('ace-builds')
  ace.config.set('basePath', 'ace-builds/src-noconflict')
  require(`ace-builds/src-noconflict/ext-searchbox.js`)
}

class CodeEditor extends Component {
  componentDidMount() {

    if(!isBrowser) return

    const {
      autoSelect,
      editorId,
      editorProps,
      onChange,
      setReadOnly,
      readOnly,
      setValue,
      value,
      theme,
      mode,
      textWrap,
    } = this.props

    require(`ace-builds/src-noconflict/mode-${mode}`)
    require(`ace-builds/src-noconflict/theme-${theme}`)

    const editor = ace.edit(editorId, editorProps)
    editor.$blockScrolling = Infinity
    editor.getSession().setUseWorker(false)
    editor.getSession().setMode(`ace/mode/${mode}`)
    editor.setTheme(`ace/theme/${theme}`)

    this.editor = editor
    editor.on('change', e => onChange(editor.getValue(), e))
    editor.setReadOnly(readOnly || setReadOnly)
    editor.setValue(value || setValue)
    editor.session.setUseWrapMode(textWrap)
    !autoSelect && editor.setValue(editor.getValue(), -1)

  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { style, editorId } = this.props
    return (<div id={editorId} style={style}></div>)
  }
}

CodeEditor.propTypes = {
  editorProps: PropTypes.object,
  editorId: PropTypes.string,
  onChange: PropTypes.func,
  setReadOnly: PropTypes.bool,
  readOnly: PropTypes.bool,
  setValue: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.string,
  mode: PropTypes.string,
  style: PropTypes.object,
}

CodeEditor.defaultProps = {
  autoSelect: false,
  editorId: 'ace-editor',
  onChange: () => {},
  setValue: '',
  value: '',
  setReadOnly: false,
  readOnly: false,
  theme: 'eclipse',
  mode: 'javascript',
  style: { height: '300px', width: '400px'},
  editorProps: {},
  textWrap: true,
}

module.exports = CodeEditor

# Ace Editor in React
* This is a react wrapper around the [Ace Editor](https://ace.c9.io)
* It was forked from [react-ace-editor](https://github.com/chunsli/react-ace-editor)
  * Then updated with a few things ( dependencies and extra props )
* [Ace Editor Demo](https://ace.c9.io/build/kitchen-sink.html)
* [Ace Editor Github](https://github.com/ajaxorg/ace)

## Getting Started
```
yarn add https://github.com/lancetipton/react-ace-editor.git
```

## Usage

```
import ReactAce from 'react-ace-editor'
import React, { useRef, useCallback } from 'react'

export const Editor = props => {
  const aceRef = useRef(null)

  const onChange = useCallback(updatedText => {
    // ...do something with the text or the ref (aceRef)
  })
  
  return (
    <ReactAce
      mode="javascript"
      theme="monokai"
      readOnly=false
      value={props.value}
      onChange={onChange}
      style={{ height: `400px`, width: `100vw` }}
      ref={element => { aceRef.current = element }}
    />
  )
}
```

## More Documentation
* For all the available method from the Ace Editor, see [Ace Editor's API documentation](https://ace.c9.io/#nav=api&api=editor)



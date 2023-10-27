import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from '@editorjs/image';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'

export const EDITOR_JS_TOOLS = {
  list: {
    class: List,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    tunes: ['anyTuneName'],
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: false,
    tunes: ['anyTuneName'],
  },
  anyTuneName: {
    class:AlignmentTuneTool,
    config:{
      default: "right",
      blocks: {
        header: 'center',
        list: 'right'
      }
    },
  },
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:5000/api/uploadFile', // Your backend file uploader endpoint
    
      }
    }
  },
  

};
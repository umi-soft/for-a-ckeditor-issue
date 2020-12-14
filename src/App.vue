<template>
  <div id="app">
    <ckeditor :editor="ckeditor.editor"
              v-model="ckeditor.content"
              :config="ckeditor.config"/>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials'
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold'
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic'
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link'
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph'

export default {
  name: 'App',
  data() {
    return {
      ckeditor: {
        editor: ClassicEditor,
        content: 'I am Ckeditor',
        config: {
          plugins: [
            EssentialsPlugin,
            BoldPlugin,
            ItalicPlugin,
            LinkPlugin,
            ParagraphPlugin
          ],
          language: 'en'
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

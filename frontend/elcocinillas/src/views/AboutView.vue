    <template>
      <div>
        <div v-if="usuarioLogeado">If true</div>
      </div>
    </template>

    <script>
    import { store } from '../store'
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      data(){
        return {
          usuarioLogeado : store.state.initSession,
        }
      },
    }
    </script>
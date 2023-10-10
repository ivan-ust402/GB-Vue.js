const tag = {
    props: ['tagName'],

    data() {
        return {
            isActive: false,

        }
    },
    methods: {
        setActive() {
            this.isActive = true;
        },
    },

    template: `
    <button
            class="blog-articles__tab-button"
            @click="setActive"
            :class="[ isActive ? 'blog-articles__tab-button_active' : '' ]"
          >
            {{tagName}}
          </button>
    `,
};
<template>
  <div>
    <div class="project-card">
      <img
        :src="require(`@/assets/img/${cardContent.imgSrc}`)"
        alt="project card image"
        class="project-card__image"
        :class="getExtraClass"
      />
      <div class="project-card__content">
        <div class="project-card__description">
          <h3 class="project-card__title">{{ cardContent.title }}</h3>
          <p class="project-card__category">{{ cardContent.category }}</p>
        </div>
        <DefaultCircleButtonComponent
          :settings="{
            width: '70px',
            height: '70px',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultCircleButtonComponent from '@/components/buttons/DefaultCircleButtonComponent.vue';

export default {
    components: { DefaultCircleButtonComponent },
    props: {
        cardContent: {
            type: Object,
            default: () => {
                return {
                    title: 'Default title',
                    category: 'Default category',
                    extraClass: '',
                    imgSrc: '#',
                }
            }
        },
        index: {
            type: Number,
            default: () => 0,
        }
    },
    computed: {
        getExtraClass() {
            switch (this.index) {
                case 0:
                    return 'project-card__image_right-top-border';
                    break;
                case 1:
                    return 'project-card__image_left-top-border';
                    break;
                case 2:
                    return 'project-card__image_right-bottom-border';
                    break;
                case 3:
                    return 'project-card__image_left-bottom-border';
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__image {
    width: 550px;
    &_right-top-border {
      border-top-right-radius: 55px;
    }
    &_left-top-border {
      border-top-left-radius: 55px;
    }
    &_right-bottom-border {
      border-bottom-right-radius: 55px;
    }
    &_left-bottom-border {
      border-bottom-left-radius: 55px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__title {
    color: #292f36;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    // line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
  }

  &__category {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    // line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>

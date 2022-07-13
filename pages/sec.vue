<template>
  <div class="builder">
    <section id="home" class="container-margin intro-jumbotron">
      <b-row class="header-bg">
        <b-col xs12>
          <div class="logo--wrapper" href="/">
            <img src="~/assets/logo_small.svg" alt="logo stilko" class="logo" />
            <div>
              <span class="title">STILKO</span>
              <p class="logo__description">již brzy</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ProductWrapper from '~/components/ProductWrapper.vue'

export default {
  layout: 'build',
  components: {
    Logo,
    ProductWrapper
  },
  data() {
    return {
      formName: '',
      formEmail: '',
      formMessage: '',
      items: [
        {
          name: 'Příslušenství oken',
          description: 'Ideální pro okna',
          photo: './kotwy.png',
          subproducts: [
            {
              name: 'Kotvy pro montáž PVC',
              description: 'Ideální pro okna',
              photo: './kotwy.png'
            },
            {
              name: 'Ukotvení oken',
              description: 'Ideální pro okna',
              photo: './kotwy.png'
            },
            {
              name: 'Kotvy do dřeva',
              description: 'Ideální pro okna',
              photo: './kotwy.png'
            }
          ]
        },
        {
          name: 'Montážní kolíky',
          description: 'Ideální pro okna',
          photo: './kolki.png'
        },
        {
          name: 'Kovové hmoždinky',
          description: 'Ideální pro okna',
          photo: './dyble.jpg'
        },
        {
          name: 'Příslušenství pro nábytek',
          description: 'Ideální pro okna'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.builder {
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#ccc, #fff);
}

.logo {
  width: 30px;
  height: 30px;

  &__description {
    font-size: 0.9rem;
    margin: 0;
    color: #666;
    margin-top: -9px;
    text-transform: capitalize;
  }

  &--wrapper {
    display: flex;
    align-items: center;

    .logo {
      width: 150px;
      height: 150px;
      margin-right: 25px;
    }

    > div {
      margin-left: 15px;

      .title {
        font-size: 10rem;
        font-weight: bold;
        cursor: default;
        color: #000;
      }

      .logo__description {
        cursor: default;
        margin-top: -60px;
        font-size: 3rem;
        letter-spacing: 6px;
        text-transform: uppercase;
      }
    }
  }
}

section.contact {
  > .row {
    max-width: 100%;

    > .contact {
      padding: 2rem;
    }
  }
}

.tile {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  &--wrapper {
    padding-top: 30px;
  }

  span {
    font-size: 1.3rem;
  }

  .icon {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;

    img {
      height: 100px;
    }

    + a {
      display: block;
      width: 100%;
    }
  }
}

.contact {
  .map {
    overflow: hidden;
  }
  .contact-form--wrapper {
    .contact--header,
    .contact--description {
      text-align: center;
    }

    .contact--header {
      font-weight: 700;
    }

    .contact--description {
      letter-spacing: 1px;
    }

    .contact--form {
      padding: 0 4.3rem;

      .contact--input {
        width: 100%;
        margin: 0.6rem 0;
        text-align: center;
        padding: 12px 0;

        background: rgba(0, 0, 0, 0.13);
        border: 0;
      }
    }

    .contact--submit {
      width: 100%;
      padding: 7px 0;
      background: #222;
      color: #eee;
      text-transform: uppercase;
      border: 0;
      position: relative;
      overflow: hidden;
    }
  }
}

.about {
  .row {
    height: 600px;
    overflow: hidden;
    display: flex;

    .col {
      height: 100%;
    }

    .content {
      flex-wrap: wrap;
      align-items: center;
      text-align: center;

      h3 {
        font-weight: bold;
        padding-bottom: 10px;
      }
    }

    .left-cover {
      background: url('https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80');
      margin-right: 4rem;
    }

    .right-cover {
      margin-left: 4rem;
      background: url('https://images.unsplash.com/photo-1478025101087-7f1ce4c83156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    }
  }
}

.intro-jumbotron {
  min-height: 400px;
  // padding-top: $offsetTop;
  height: calc(45vh - #{$offsetTop});
  display: flex;
  justify-content: center;
  // background: linear-gradient(#ccc, #fff);
  // width: 80vw;

  .row {
    height: 100%;
    width: 100%;

    // @media (min-width: 765px) {
    //   display: flex;
    // }

    .col {
      display: flex;
      align-items: center;

      .jumbotron {
        background: transparent;

        .display-3 {
          font-weight: 700;
          font-size: 2.9rem;
        }

        .lead {
          font-size: 1.23rem;
          // font-size: 1.67rem;
        }
      }

      &.kotwy {
        display: none;
        background: url('/kotwy.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center right;

        @media (min-width: 765px) {
          display: block;
        }
      }
    }
  }
}

.padding--y {
  padding-bottom: 6rem;
}

.contact {
  .row {
    display: flex;

    > div {
      width: 50%;
    }
  }
}

.products {
  padding-bottom: 6rem;
}
</style>

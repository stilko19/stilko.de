<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" :class="{'white-bg': whiteBackgroundNav}">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-navbar-brand v-scroll-to="'#home'" class="brand" :class="{'showed': whiteBackgroundNav}">
      <div class="logo--wrapper-special" href="/">
        <img src="~/assets/logo_small.svg" alt="logo stilko" class="logo"/>
        <div>
          <span class="title">STILKO</span>
          <p class="logo__description">UND ALLES AUS METALL</p>
        </div>
      </div>
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item :class="{'hovered': whiteBackgroundNav}" href="#home" v-scroll-to="'#home'">Home</b-nav-item>
          <b-nav-item :class="{'hovered': whiteBackgroundNav}" href="#products" v-scroll-to="'#products'">Produkte</b-nav-item>          
          <b-nav-item :class="{'hovered': whiteBackgroundNav}" href="#about" v-scroll-to="'#about'">Über uns</b-nav-item>
        </b-navbar-nav>

        <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template slot="button-content">Produkty</template>
          <b-dropdown-item href="#">Kotwy 1</b-dropdown-item>
          <b-dropdown-item href="#">Kotwy 2</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <b-nav-item class="special-link" v-scroll-to="'#ct-form'" href="#ct-form">Kontakt</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script>

  const checkScroll = () => {
    return window.scrollY >= 100;
  }

  /**
   * 
   * Kotwy montażowe
   * Kolki montazowe
   * Dyble
   * Akcesoria do mebli
   * 
   *  Opis pod kołki od razu
   *  Opis pod dyble od razu
   */

  export default {
    data () {
      return {
        whiteBackgroundNav: false
      }
    },
    mounted () {
      this.whiteBackgroundNav = checkScroll()
      window.addEventListener('scroll', () => {
        this.whiteBackgroundNav = checkScroll()
      }, {
        passive: true
      })
    }
  }

</script>

<style lang="scss">

  .hovered {
    .nav-link{
      color: #000 !important;
    }
  }

  .logo--wrapper-special {
     display: flex;
     align-items: center;

     .logo {
       margin-right: 15px;

       &__description {
         color: #ddd;
       }
     }

     .title {
       color: #fff;
     }

  }

  .brand {
    @media (min-width: 980px) {
      // display: none;
    }
    pointer-events: none;
    transition: opacity .5s;
    opacity: 1;
    cursor: pointer;

    &.showed {
      pointer-events: initial;
      @media (min-width: 980px) {
        display: block;
      }

      .logo--wrapper-special {

        .logo {

          &__description {
            color: #333;
          }
        }

        .title {
          color: #000;
        }

      }
    }
  }

  .navbar{
    padding: 15px $marginX;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    transition: background-color .6s, box-shadow .6s;
    will-change: background-color, box-shadow;

    // display: block;
    // @media screen and (min-width: 980px) {
      display: flex;
    // }

    @media screen and (max-width: 979px) {
      justify-content: flex-start;
    }

    .navbar-brand {
      font-family: 'Ubuntu';

      @media screen and (max-width: 330px) {
        margin-right: 0 !important;
      }
    }

    background: #595959;
    -webkit-box-shadow: 0px 8px 23px -9px rgba(0,0,0,0.53);
    -moz-box-shadow: 0px 8px 23px -9px rgba(0,0,0,0.53);
    box-shadow: 0px 8px 23px -9px rgba(0,0,0,0.53);
    
    @media (min-width: 980px) {
      background: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }

    &.white-bg {
      background: #fff;
      -webkit-box-shadow: 0px 8px 23px -9px rgba(0,0,0,0.53);
      -moz-box-shadow: 0px 8px 23px -9px rgba(0,0,0,0.53);
      box-shadow: 0px 8px 23px -9px rgba(0,0,0,0.53);
    }

    .navbar-nav {
      .nav-item {
        .nav-link {
          color: #000;
        }
      }
    }
    
  }

  .nav-link {
    color: #fff;
  }

  // .main-content {
  //   margin-top: $offsetTop;
  // }

  .navbar-brand {
    font-weight: bold;
    font-size: 1.66rem;
  }

  .navbar-toggler {
    border: none;

    .navbar-toggler-icon {
      width: 1.2em;
      height: 1.2em;
    }
  }

  .navbar-light {
    .navbar-nav {
      .nav-item {
        font-family: 'Ubuntu';
        
        padding: 0 15px;
        letter-spacing: 2px;

        .nav-link {
          color: #fff;
        }

        &.special-link {
          border: 2px solid $colGreen;
          letter-spacing: initial;
          margin-left: 5px;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 20px;
          font-size: .85rem;
          transition: border .5s, padding .4s;
          position: relative;
          color: #000;

          .nav-link {
            color: #000;
          }

          &:before {
            content: '';
            position:absolute;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            
            background: linear-gradient($colGreen, #3fcc7c);
            z-index: -1;
            opacity: 1;
            transition: opacity .7s;
          } 

          a {
            transition: .3s;
          }
          
          &:hover {
            border: 2px solid transparent;
            a {
              color: #fff;
            }
            // padding: 0px 18px;

            &:before {
              opacity: 1;
            }
            // background: linear-gradient($colGreen, #3fcc7c);
          }
        }

        .dropdown-toggle::after {
          margin-left: .9em;
          color: $colBlue;
        }
        
        a {
          color: #000;
        }
      }
    }
  }
  


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

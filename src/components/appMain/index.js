import { appToolBar } from '../appToolBar'
import { appNavHistory } from '../appNavHistory'

const template = ({ state, html }) => html`
  <div class="ctx-grid ctx-grid-desktop">
    <div class="ctx-header"></div>

    <div class="ctx-tool-bar">
      <app-tool-bar></app-tool-bar>
    </div>

    <div class="ctx-container">
      <div class="ctx-nav-history">
        <app-nav-history></app-nav-history>
      </div>
      <div class="ctx-content">
        <router-view></router-view>
      </div>
    </div>  
  </div>
`

export const appMain = () => {
  const children = () => ({
    appToolBar,
    appNavHistory
  })
  return { template, styles, children }
}

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: flex;
		width: 100%;
		height: 100vh;
    background: #f2f1ff
	}
  .ctx-grid {
    display: grid;
    width:100%
  }
	.ctx-header { 
    grid-area: header;
    background:#3700f3
   }
  
	.ctx-tool-bar { 
    background:#fff;
    grid-area: toolbar 
  }

	.ctx-container { 
    grid-area: container;
    padding:1rem;
    overflow-x: hidden;
    overflow-y: scroll;
    position:relative
   }

   .ctx-nav-history {
     display: flex;
     width: 100%;
     height: 4rem;
     margin-bottom:1rem;
     background:#fff;
     border-radius:5px;
     border: 1px #ebebeb solid
   }

  .ctx-content { 
    display: flex;
    width:100%;
    height:100vh;
    padding:1rem;
    background: #fff;
    border:1px #ebebeb solid;
    border-radius:5px        
   }

  .ctx-grid-desktop {
    grid-template-columns: 250px 1fr ;
    grid-template-rows: 4rem 1fr;
    grid-template-areas: 
    "header header header"
    "toolbar container container"
  }

`

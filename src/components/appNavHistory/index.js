import { observerFactory, routerParamsFactory } from 'lemejs'

const template = ({ state, html }) => html`
	<div class="ctx-nav-icon">
		<span class="material-symbols-rounded"> dataset_linked </span>
	</div>
	<ul class="ctx-nav">
		<li>
			<a href="#/" class="ctx-link">
				Resumo 
				<span class="material-symbols-rounded ctx-icon"> chevron_right </span>
			</a>
		</li>
		<li>
			<span class="ctx-text">${state.routeParams.label}<span>
		</li>
	</ul>
`

export const appNavHistory = () => {
  const routeParams = routerParamsFactory()

  const state = observerFactory({
    routeParams: {
      hash: routeParams.getFirst(),
      label: ''
    }
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    const params = routeParams.getAll()
    const routeConfig = routeParams.getConfig()

    setHash({ params, routeConfig })
    routeParams.onChange(setHash)
  }

  const setHash = ({ params, routeConfig }) => {
    const { label } = routeConfig
    const hash = params.shift()
    state.set({ routeParams: { hash, label } })
  }

  return { template, styles, state, hooks }
}

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: grid;
		grid-template-columns: 4rem 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: "icon nav";
		width: 100%;
		position: relative;
	}

	.ctx-nav {
		display: flex;
		align-items: center;
		grid-area: nav;
		border-left: 1px #ebebeb solid;
    padding: 0 1rem
	}

  .ctx-nav li {
    display: flex;
    justify-content: flex-start;
  }
	.ctx-nav-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: icon;
	}

  .ctx-icon {
    padding:0;
    font-size: .875rem;
    position:relative;
    top: 0   
  }

  .ctx-link { font-weight: bold }

  .ctx-link,
  .ctx-text {
		display: flex;
		align-items: center;
		height:2rem;
    font-size: .875rem;
    color: #666;
  }

  .ctx-link:hover {
    text-decoration: underline;
    text-decoration-color: #ccc;
  }

  .ctx-text {
    padding-top:1px;
    padding-left: 3px
  }
`

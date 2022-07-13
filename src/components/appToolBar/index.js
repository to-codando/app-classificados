import { observerFactory, routerParamsFactory } from 'lemejs'
import { store } from '../../store'

const template = ({ state, html }) => html`
	<ul class="ctx-menu">
		${state.tools
			.map(
				(tool) => html`
					<li class="${tool.isActive && 'active'}">
						<a href="#/${tool.hash.replace(/#\/|\//, '')}">
							<span class="material-symbols-rounded ctx-icon">
								${tool.icon}
							</span>
							<span class="ctx-label">${tool.label}</span>
						</a>
					</li>
				`
			)
			.join('')}
	</ul>
`

export const appToolBar = () => {
  const routeParams = routerParamsFactory()

  const state = observerFactory({
    tools: store.getState().tools,
    routeParams: {
      hash: routeParams.getFirst()
    }
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    routeParams.onChange(setHash)
  }

  const setHash = ({ params }) => {
    const { tools } = state.get()
    const hash = params.shift()
    const newTools = tools.map((tool) => {
      if (tool.hash === hash) {
        tool.isActive = true
        return tool
      }
      tool.isActive = false
      return tool
    })
    state.set({ ...state.get(), tools: newTools })
  }

  return { template, styles, hooks, state }
}

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.ctx-menu {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 1rem;
		padding: 1rem;
		width: 100%;
	}

	.ctx-menu li {
		margin: 0 auto;
		width: 100%;
		height: 5rem;
		align-items: center;
		border-radius: 5px;
		transition: ease-in-out 0.5s;
	}

	.ctx-menu li,
	.ctx-menu a {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.ctx-menu a {
		align-items: center;
		justify-content: center;
		position: relative;
		font-size: 0.8rem;
		font-weight: 500;
		color: #666;
		border-radius: 5px;
		transition: ease-in-out 0.5s;
	}

	.ctx-menu li:hover {
		color: #f9f9f9;
		background: #3700f3;
	}

	.ctx-menu li:hover a {
		color: #f9f9f9;
	}

	.ctx-menu .active a {
		color: #bdd8fa;
	}

	.ctx-menu .active,
	.ctx-menu .active:hover a {
		background: #3700f3;
		color: #f9f9f9;
	}

	.ctx-label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.ctx-icon {
		margin-bottom: 0.5rem;
	}
`

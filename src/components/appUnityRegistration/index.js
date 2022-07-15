import { appCampaign } from '../appCampaign'

export const appUnityRegistration = () => {
  const children = () => ({
    appCampaign
  })

  return { template, styles, children }
}

const template = ({ html }) => {
  return html`
    <div class="ctx-container">
      <h1>Unity Registration</h1>
      <app-campaign></app-campaign>
    </div>
  `
}

const styles = ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }
`

const template = ({ html }) => {
  return html`
    <div class="ctx-container">
      <h1>Dashboard</h1>
    </div>
  `
}

export const appDashboard = () => {
  return { template, styles }
}

const styles = ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }
`

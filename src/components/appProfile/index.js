const template = ({ html }) => {
  return html`
    <div class="ctx-container">
      <h1>Profile</h1>
    </div>
  `
}

export const appProfile = () => {
  return { template, styles }
}

const styles = ({ ctx, css }) => css`
  ${ctx} {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }
`

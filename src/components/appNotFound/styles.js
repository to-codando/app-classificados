export default ({ ctx, css }) => css`
    ${ctx} { display:inline }  
    ${ctx} a {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width:100%;
        max-width:220px;
        padding:15px;
        border-radius:5px;
        outline:0;
        color:#fff;
        background:#5f61ef;
        margin:15px auto 15px auto;
    } 
`

import Layout from '../components/Layout.js';
import Link from 'next/link';

const linkStyle = {
  color: '#3B413C',
};

const imgStyle = {
  maxWidth: '100%',
  '-webkit-box-shadow': '-5px 5px 26px -22px rgba(69,65,69,1)',
  '-moz-box-shadow': '-5px 5px 26px -22px rgba(69,65,69,1)',
  'box-shadow': '-5px 5px 26px -22px rgba(69,65,69,1)',
}

const imgRowStyle = {
  marginTop: '20px',
}

const mainHeaderStyle = {
  margin: '0px',
  fontSize: '2rem'
}

const subtitleStyle = {
  margin: '0px',
  fontSize: '1.3rem'
}

export default function Index(props) {
  return (
    <Layout>
      <h1 style={mainHeaderStyle}>{props.title}</h1>
      <span style={subtitleStyle}>{props.subtitle}</span>
        <p>{props.description}</p>
        {props.links.map(link => (
            <div>- <Link href={link.href}><a title={link.title} style={linkStyle}>{link.label}</a></Link></div>
        ))}
        <div class="row" style={imgRowStyle}>
        <div class="col-xs-12 col-md-8">
            <img style={imgStyle} src={props.img}></img>
        </div>
        </div>
    </Layout>
  );
}
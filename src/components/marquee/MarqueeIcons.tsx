import { Typography } from "@mui/material";
import Marquee from "./Marquee";

const icons = [
/*   { src: "/icons/netcore.svg", alt: ".NET Core" },
 *//*   { src: "/icons/js.svg", alt: "JavaScript" },
 */  { src: "/icons/js.svg", alt: "Node.js" },
  { src: "/icons/react.svg", alt: "React" },
  { src: "/icons/sql.svg", alt: "SQL" },
  { src: "/icons/mongo.svg", alt: "MongoDB" },
/*   { src: "/icons/aws.svg", alt: "AWS" },
 */  { src: "/icons/reactnative.svg", alt: "React Native" },
/*   { src: "/icons/azure.svg", alt: "Azure" },
 */];

function renderIcons() {
	return (
		<div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
			{icons.map((icon, index) => (
				<div 
					key={index} 
					style={{ display: 'flex', alignItems: 'center', margin: '0 20px' }}
				>
					<img 
						src={icon.src} 
						alt={icon.alt} 
						style={{ width: '40px', height: '40px', marginRight: '8px' }} 
					/>
					<span style={{ fontSize: '18px', color: '#000' }}>{icon.alt}</span>
				</div>
			))}
		</div>
	);
}


export default function MyComponent() {
	return (
		<Marquee 
			phrase1={renderIcons()} 
			phrase2={""} 
		/>
	);
}

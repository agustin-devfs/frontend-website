import Marquee from "./Marquee";
import {icons} from "@/app/core/utils/contants"

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
					<span style={{ fontSize: '30px', color: '#000' }}>{icon.alt}</span>
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

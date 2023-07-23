// Import images
// import WebImage1 from '../images/web-project-1.jpg';
// import WebImage2 from '../images/web-project-2.jpg';
// import MobileImage1 from '../images/mobile-project-1.jpg';
// import MobileImage2 from '../images/mobile-project-2.jpg';
// import UIImage1 from '../images/ui-project-1.jpg';
// import UIImage2 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';


export const projectsData = [
	{
		id: 1,
		title: 'Proyecto Ecommerce - Comercial',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-ecommerce-php_dv7gnt.webp',
		ProjectHeader: {
			title: 'Proyecto Ecommerce - Comercial',
			publishDate: 'Junio del 2022',
			tags: 'Web',
			link: 'http://shermandeploy.byethost7.com/PROYECTO_ECOMMERCE_PERSONAL_FAMILIA/',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-ecommerce-php_dv7gnt.webp',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-ecommerce-php_dv7gnt.webp',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-ecommerce-php_dv7gnt.webp',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Crear una aplicación web para el incremento de ventas de una empresa',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React js',
						'TailwindCSS',
						'EmailJs',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Credenciales:'
				},
				{
					id: 2,
					details:
						'- Rol cliente --> usuario: user01@gmail.com y password: user01'
				},
				{
					id: 3,
					details:
						'- Rol Admin --> usuario: admmin@gmail.com y password: admin'
				},


			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 2,
		title: 'Proyecto simulado de Netflix',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
		ProjectHeader: {
			title: 'Proyecto Ecommerce - Comercial',
			publishDate: 'Febrero del 2022',
			tags: 'Web',
			link: 'http://shermandeploy.byethost7.com/Netflix_ultimate/movie.html',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Crear una aplicación web para el simular la web de Netflix',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Credenciales:'
				},
				{
					id: 2,
					details:
						'- Rol cliente--> usuario: usuario@gmail.com y password: 123456'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 3,
		title: 'Proyecto Portfolio 2022',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-portfolio-react_pudr7k.webp',
		ProjectHeader: {
			title: 'Proyecto Portfolio 2022',
			publishDate: 'Junio del 2022',
			tags: 'Web',
			link: 'https://portfolio-web-ghyt.netlify.app/',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-portfolio-react_pudr7k.webp',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-portfolio-react_pudr7k.webp',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-portfolio-react_pudr7k.webp',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Crear una página web para mostrar los distintos proyectos que se avanza',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React js',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Proyectos de diferentes categorías'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 4,
		title: 'Dashboard en Excel',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974067/Imagenes_Portafolio/proyecto-dashboard-excel_etsclq.webp',
		ProjectHeader: {
			title: 'Dashboard en Excel, Uso de Tablas de datos y tablas dinámicas',
			publishDate: 'Junio del 2022',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:x:/g/personal/german_huaytalla_unmsm_edu_pe/Edfx0_w21vpGvaXPARL4tlEBUfsMPrNDM7eDDGBi82Gipg?e=EqfqlM',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974067/Imagenes_Portafolio/proyecto-dashboard-excel_etsclq.webp',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974067/Imagenes_Portafolio/proyecto-dashboard-excel_etsclq.webp',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974067/Imagenes_Portafolio/proyecto-dashboard-excel_etsclq.webp',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar dataset de ventas para la mejora de toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'Excel',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizamos dataset de ventas, luego realizamos una tabla de datos, tablas dinámicas y por último un dashboard integral.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 5,
		title: 'Filtro en Excel',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
		ProjectHeader: {
			title: 'Filtro en Excel',
			publishDate: 'Enero del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:x:/g/personal/german_huaytalla_unmsm_edu_pe/ES2uWCY0SZJGsAcEU_02ptkBukpRaSUHQBm-OqeZohEXkw?e=Mbv72G',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Realizar  filtro de datos para encontrar data de forma rápida',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'EXCEL',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Es preferible descargar el archivo, ya que el proyecto está hecho en Macros.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 6,
		title: 'Proyecto Api tipo REST',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-apirest-php_yicdyh.webp',
		ProjectHeader: {
			title: 'Proyecto Api tipo REST',
			publishDate: 'Enero del 2022',
			tags: 'Web',
			link: 'https://shermandeploy.000webhostapp.com/Backend_Apirest_PHP_users/index.php',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-apirest-php_yicdyh.webp',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-apirest-php_yicdyh.webp',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-apirest-php_yicdyh.webp',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Conocer las funcionalidades de una API a nivel de código',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Solo se encuentra la interfaz de cómo es la api, próximamente se colocará el backend en un host para reaizar los requests correspondientes'
				},


			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 7,
		title: 'Análisis de ventas de tienda Appol',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_cla9xe.png',
		ProjectHeader: {
			title: 'PowerBI-Análisis de ventas de tienda Appol',
			publishDate: 'Febrero del 2023',
			tags: 'PowerBI',
			link: 'https://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/EesE5roTP1ZEl2sWCpQL87kBAc-78p_0ySrr3UF8tnwqZA?e=dNUrUJ',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_cla9xe.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_cla9xe.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_cla9xe.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar dataset para la toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'Power',

					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizar dataset Appol para la toma de decisiones.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 8,
		title: 'Análisis de ventas de tienda Appol v2',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_2_ofbdp2.png',
		ProjectHeader: {
			title: 'PowerBI-Análisis de ventas de tienda Appol v2',
			publishDate: 'Febrero del 2023',
			tags: 'PowerBi',
			link: 'https://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/ER1C520731ZEiEqVEbpiEKoB6LLvQShiqeYbBWNbOskkLA?e=WRHy1U',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_2_ofbdp2.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_2_ofbdp2.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679589188/Imagenes_Portafolio/dashboard_appol_2_ofbdp2.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar dataset de Appol V2 para la toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'PowerBI',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizar dataset de Appol V2 para la toma de decisiones.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 9,
		title: 'Dashboard Análisis de ventas',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-3_g02j7d.png',
		ProjectHeader: {
			title: 'Dashboard Análisis de ventas',
			publishDate: 'Febrero del 2023',
			tags: 'PowerBi',
			link: 'http://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/ESnWkWkTZW1JopgafogR84IBqbfQEH5X8C8f5IlOzO5tnA',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-3_g02j7d.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-3_g02j7d.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-3_g02j7d.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar dataset de ventas para la toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'PowerBI',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizar dataset de ventas para la toma de decisiones.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 10,
		title: 'Dashboard de Producción',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-1_hzjwok.png',
		ProjectHeader: {
			title: 'Dashboard de Producción según prioridad y tipo de envío',
			publishDate: 'Febrero del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/EXWOKnlketBJqF0icFecNcEB_IqwNicdcSrBK2MvUZfhZg?e=SgUXZs',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-1_hzjwok.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-1_hzjwok.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-1_hzjwok.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar dataset de Producción para la toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'PowerB',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizar dataset de Producción para la toma de decisiones'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 11,
		title: 'Dashboard Análisis Escuelas por estado',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-4_cru0l2.png',
		ProjectHeader: {
			title: 'Dashboard Análisis Escuelas por estado',
			publishDate: 'Febrero del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/EQHzuc-IV6FFoNJEVnPu8M8BToDzNrLgM5-KBw2uTeQ-Vw?e=71VNyX',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-4_cru0l2.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-4_cru0l2.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-4_cru0l2.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar dataset de Escuelas por estado para toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'PowerBI',
					],
				}
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizar dataset de Escuelas por estado para toma de decisiones.'
				},


			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	}, {
		id: 12,
		title: 'Dashboard de zonas con más daños por temblor',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-2_eztrvr.png',
		ProjectHeader: {
			title: 'Dashboard de zonas con màs daños por temblor',
			publishDate: 'Marzo del 2023',
			tags: 'PowerBI',
			link: 'https://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/EcY-a-lI3elDo29j6x4RvjEB-qH3TMv1DDxk3UH3f9BN5A?e=IH17fN',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-2_eztrvr.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-2_eztrvr.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-2_eztrvr.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar zonas con más daños por temblor para la toma de decisiones.',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'PowerBI',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Analizar zonas con más daños por temblor para la toma de decisiones.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	}, {
		id: 13,
		title: 'Dashboard Análisis de ventas en Australia',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590664/Imagenes_Portafolio/dashboard-5_ouysiv.png',
		ProjectHeader: {
			title: 'Dashboard Análisis de ventas en Australia',
			publishDate: 'Marzo del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:b:/g/personal/german_huaytalla_unmsm_edu_pe/EUKTsB7SvblPnJbp51flGEgBtWOXf2mVmlpoyIjjCeMLIA?e=gfuJYm',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590664/Imagenes_Portafolio/dashboard-5_ouysiv.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590664/Imagenes_Portafolio/dashboard-5_ouysiv.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590664/Imagenes_Portafolio/dashboard-5_ouysiv.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar las ventas de Australia para la toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Análizar las ventas de Australia para la toma de decisiones.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	}, {
		id: 14,
		title: 'Dispositivos MCU programables',
		category: 'IOT',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679592218/Imagenes_Portafolio/proyecto_iot_kbnych.png',
		ProjectHeader: {
			title: 'Dispositivos MCU programables',
			publishDate: 'Marzo del 2023',
			tags: 'IOT',
			link: 'https://unmsmmail-my.sharepoint.com/:u:/g/personal/german_huaytalla_unmsm_edu_pe/EYpkLB46jSNNqBaE29E7DeMBnrsOcgqdcmRyvwE9FXbcTg?e=FnFfOn',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679592218/Imagenes_Portafolio/proyecto_iot_kbnych.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679592218/Imagenes_Portafolio/proyecto_iot_kbnych.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679592218/Imagenes_Portafolio/proyecto_iot_kbnych.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Analizar las ventas de Australia para la toma de decisiones',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'Cisco Packet Tracer',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Análizar las ventas de Australia para la toma de decisiones.'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	}, {
		id: 15,
		title: 'Sistema de gestión de ventas',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1685509091/sistema_ventas_ezi3nd.png',
		ProjectHeader: {
			title: 'Sistema de gestión de ventas',
			publishDate: 'Mayo del 2023',
			tags: 'Web',
			link: 'http://shermandeploy.byethost7.com/7_2_pos_venta_prod/',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1685509091/sistema_ventas_ezi3nd.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1685509091/sistema_ventas_ezi3nd.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1685509091/sistema_ventas_ezi3nd.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Acerca del cliente	',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Proyecto Personal',
				},
				{
					id: 2,
					title: 'Servicios',
					details: '-',
				},
				{
					id: 3,
					title: 'Website',
					details: '-',
				},
				{
					id: 4,
					title: 'Celular',
					details: '-',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Aplicación web para gestionar inventario de productos',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Gestionar inventario de productos para optimizar el procesos de ventas.'
				},
				{
					id: 2,
					details:
						'Credenciales:'
				}, {
					id: 3,
					details:
						'- usuario: admin y pass: admin'
				},

			],
			SocialSharingHeading: 'Compartir proyecto',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/',
				},
			],

		}
	},


];

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
		title: 'Dashboard de Análisis de Ventas - Excel',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974067/Imagenes_Portafolio/proyecto-dashboard-excel_etsclq.webp',
		ProjectHeader: {
			title: 'Dashboard en Excel, Uso de Tablas de datos y tablas dinámicas',
			publishDate: 'Junio del 2022',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/Ert6yHiVQ6VKnU3aXuOJhqkBBVNG-i64jkgr9jl3ciy6HA?e=bgRXSZ',
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
						'Tenemos el dataset de ventas de una empresa X, la cual se realiza una limpieza de de data previamente, luego lo volcamos a Power Query para poder transformar datos y luego se carga como tabla de datos en nuestra hoja de Excel. Posteriomente mediante tablas dinámicas analizamos qué data nos serviran para la toma de decisiones, dado que se brinda datos precisos para su evaluación. En base a estas tablas dinámicas generamos los gráficos dinámicos que facilitan poder entender y explicar los resultados.'
				},
				{
					id: 2,
					details:
						'EL proceso consta de la limpieza y tranformación de datos mediante Power Query, carga de datos a la hoja de excel como tabla de datos, realizar tablas dinámicas para analizar casos, generar gráficos que ayuden en la comprensión de resultados y que son usados en el dashboad, y por último el uso de segmentadores de datos que facilitan realiza filtros en las gráficas.'
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
		title: 'Dashboard de Producción empresarial - Power BI',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-1_hzjwok.png',
		ProjectHeader: {
			title: 'Dashboard de Producción según prioridad y tipo de envío',
			publishDate: 'Febrero del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/Elhwf09XTYdPgmhXq9iS7esBuq6whqv4lbqu2gXIXMRXQQ?e=hTgSMV',
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
					icon: <FiYoutube />,
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
						'El dataset de Producción muestra la lista de órdenes realizadas en una fecha específica, con el costo total de ello, la prioridad de esta, el tipo de cliente, tipo de envío y el gerente que estuvo a carga de la orden. También la orden maneja el estado de Entregado o Devuelto y la razon en caso sea devuelto.'
				}, {
					id: 2,
					details:
						'Observamos el dashboard y decimos: '
				}, {
					id: 3,
					details:
						'- Tenemos un gráfico circular donde se analiza el costo de la orden(cantidad) por prioridad, la cual puede ser de alta, media y baja en base al tipo de orden.'
				}, {
					id: 4,
					details:
						'- Tenemos un segmentos que interactúa con los diferentes gráficos para filtrar las órdenes por prioridad.'
				},
				{
					id: 4,
					details:
						'- Tenemos un gráfico de columnas agrupadas y líneas donde se analiza el costo de orden(cantidad) generados por gerente.'
				}, {
					id: 5,
					details:
						'- Tenemos una tabla donde se muestra la cantidad de dinero generado de los tipos de clientes por tipo de envío.'
				}, {
					id: 6,
					details:
						'- Tenemos un gráfico tipo medidor donde se analiza el costo por orden(cantidad) por prioridad Alta.'
				}, {
					id: 7,
					details:
						'- Tenemos un gráfico de barras donde se analiza el costo por orden(cantidad) por tipo de cliente.'
				}, {
					id: 8,
					details:
						'- Tenemos un gráfico de barras donde se analiza el costo por orden(cantidad) por año.'
				}, {
					id: 9,
					details:
						'- Tenemos labels que muestra la última fecha de envío y el estado(status) del ùltimo envío.'
				}, {
					id: 10,
					details:
						'Podemos concluir que:'
				}, {
					id: 11,
					details:
						'- Los datos mostrados en el dashboard indican una estabilidad en los costos por orden durante los años 2016-2019.'
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
					url: 'https://www.youtube.com/',
				},
			],

		}
	},
	{
		id: 3,
		title: 'Dashboard de ventas en sucursales de una empresa - Power BI',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1693971283/Portfolio_Data-Analytics/001-Ventas_por_sucursal_xamb0g.png',
		ProjectHeader: {
			title: 'Dashboard Análisis de ventas',
			publishDate: 'Febrero del 2023',
			tags: 'PowerBi',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/EjZXofo9TkJGhLz0LpAarmYBH3bm-qzB9CIcni9_ImUYfw?e=wYLkGp',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1693971283/Portfolio_Data-Analytics/003-Ventas_por_sucursal_mzawil.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1693971283/Portfolio_Data-Analytics/002-Ventas_por_sucursal_j98ccc.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1693971283/Portfolio_Data-Analytics/001-Ventas_por_sucursal_xamb0g.png',
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
						'Este dataset muestra las ventas totales por fecha en diferentes sucursales de una empresa; la cantidad de clientes y nro de créditos por fecha; los pagos y adeudo que tienen estos clientes a la empresa por fecha.'
				}, {
					id: 1,
					details:
						'Observamos el dashboard del proyecto y decimos:'
				}, {
					id: 2,
					details:
						'- Tenemos un gráfico de líneas que mapea las Ventas Totales por mes y día, ventas que oscilan entre 0 y 300 mil dólares duante el año 2020.'
				}, {
					id: 3,
					details:
						'- Tenemos un gráfico de barras que mapea las ventas totales por sucursales de la orgaización.'
				}, {
					id: 4,
					details:
						'- Tenemos un segmentador por mes y sucursal que nos permite filtrar la data en los diferentes gráficos.'
				}, {
					id: 5,
					details:
						'- Tenemos un gráfico de líneas que muestra el % de adeudo o deudas de clientes a la empresas por mes.'
				}, {
					id: 6,
					details:
						'- Tenemos labels que muestran los clientes totales, ventas totales, pagos totales, porcentjae de pagos respecto al total de ventas, número de clientes con adeudo o deudas, y total de adeudo actual en los diferentes sucursales.'
				}, {
					id: 7,
					details:
						'Podemos concluir que:'
				}, {
					id: 8,
					details:
						'- En conclusión, es fundamental saber que el total de pagos que realizan los clientes a la empresa es mayor que el total de ventas estimado, por lo que el saldo es positivo y el riesgo de tener clientes con adeudo no es tan alto para impactar la rentabilidad.'
				}
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
		title: 'Dashboard Análisis de ventas en Australia - Power BI',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590664/Imagenes_Portafolio/dashboard-5_ouysiv.png',
		ProjectHeader: {
			title: 'Dashboard Análisis de ventas en Australia',
			publishDate: 'Marzo del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/EjqwSI17U-VKhqZ1ryfVLyIBoWadkHmP-9fMfVEGmxPKqA?e=P5nvXY',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690742748/Imagenes_Portafolio/proyecto4_dashboard_australia_1_bqij9e.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690742748/Imagenes_Portafolio/proyecto4_dashboard_australia_2_rfp2rk.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690742748/Imagenes_Portafolio/proyecto4_dashboard_australia_3_vkler2.png',
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
						'Este dataset nos permite conocer las ventas realizadas en Australia por categpria de producto, por fecha, por postcode. En base al postcode conocer el estado del país y el manager. A través de la categoría saber a los buyer person de los productos.'
				},
				{
					id: 2,
					details:
						'Observamos el dashboard del proyecto y decimos: '
				}, {
					id: 3,
					details:
						'- Tenemos un gráfico de barras donde se analiza las ventas por estado (Australia), tipo de cadena(supply chain) y categoría(Category).'
				}, {
					id: 4,
					details:
						'- Tenemos un gráfico de columnas agrupadas y de líneas donde se analiza las ventas y beneficio bruto(Gross Profit) por fecha (FY Qtr).'
				}, {
					id: 5,
					details:
						'- Tenemos un gráfico de dispersión donde se analiza las ventas, porcentaje de utilidad y Beneficio bruto(Gross Profit) por Categoría(Category) y por fecha(FY Qrt).'
				}, {
					id: 6,
					details:
						'- Tenemos un gráfico circular que nos muestras las ventas por tipo de cadena (Supply Chain).'
				}, {
					id: 7,
					details:
						'Podemos concluir que:'
				}, {
					id: 8,
					details:
						'- Se realizó un análisis comparativo de las ventas realizadas por fecha, que junto al analisis del beneficio bruto obtenidas podemos concluir que los mayores beneficios se dieron en 2017Q1 y las menores en 2018Q1.'
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
		title: 'Dispositivos MCU programables - Cisco (CPT)',
		category: 'IOT',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679592218/Imagenes_Portafolio/proyecto_iot_kbnych.png',
		ProjectHeader: {
			title: 'Dispositivos MCU programables',
			publishDate: 'Marzo del 2023',
			tags: 'IOT',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/ElU73D_Ge2xOqBRBwpG8QlgB7YJf6XlaJy3N8fXDM1vYMw?e=WE3XCT',
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
				'Conocer la funcionalidad de los dispositivos MCD y los módulos que maneja.',
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
						'Observamos la funcionalidad del microcontrolador MCU y cómo interactúa con los dispositivos input con los ouput.'
				},
				{
					id: 2,
					details:
						'Los dispositivos input que observamos son switch on-off, button, regulador numèrico, regulador tipo palanca. Como ouput vemos la lámpara, el LED y ventilador. Los dispositivos input del MCU manda señales analógicas o digitales dependiendo el tipo hacia los dispositivos ouput.'
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
		title: 'Sistema de facturas con Macros - Excel',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690275348/Imagenes_Portafolio/proyecto_macros_1_fb0iyc.png',
		ProjectHeader: {
			title: 'Sistema de Facturación con Macros - Excel',
			publishDate: 'Julio del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/ElFUZgWcCXhLrl_giCmcKS8BGiuHaXGbSxr3xlZUGtf-mg?e=sTGo0V',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690275348/Imagenes_Portafolio/proyecto_macros_1_fb0iyc.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690275349/Imagenes_Portafolio/proyecto_macros_4_cfprkn.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690275348/Imagenes_Portafolio/proyecto_macros_3_e2vupr.png',
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
				'Crear un sistema que nos permita conocer más funcionalidades de Macros',
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
						'El proyectos nos permite conocer como usar worksheets, workbooks, formularios y procedimientos con Macros.'
				},
				{
					id: 2,
					details:
						'Con el sistema hecho podemos registrar facturas que cuenta con campos de cliente y producto, exportarlo como pdf o excel, calcular costos, gestionar stock, ver el historial de facturas y eliminar una factura realizada.'
				}, {
					id: 3,
					details:
						'Se cuenta con 2 hojas, una para la factura y otra de la lista de productos. Este último puede actualizarse luego de haber registrado productos. '
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
		title: 'Certificaciones Obtenidas - Drive',
		category: 'Certification',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690317596/Imagenes_Portafolio/certificaciones_cursos_ckoomk.png',
		ProjectHeader: {
			title: 'Certificaciones Obtenidas de cursos externos',
			publishDate: 'Julio del 2023',
			tags: 'Data Analytics',
			link: 'https://drive.google.com/drive/folders/1t_GdF3Z_JcKcPVb03NB2zlFpC6sFiRTo?usp=sharing',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690317596/Imagenes_Portafolio/certificaciones_cursos_ckoomk.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690317210/Imagenes_Portafolio/certificaciones_cursos_2_xkjz00.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690317210/Imagenes_Portafolio/certificaciones_cursos_1_qzx2jz.png',
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
				'Mostrar la validez de los conocimientos obtenidos',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'Driv',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Mostrar la validez de los conocimientos obtenidos.'
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
		title: 'Análisis de data de Producción empresarial - Excel',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690340554/Imagenes_Portafolio/proyecto2_dashboard_dbproducci%C3%B3n_idydbs.png',
		ProjectHeader: {
			title: 'Dashboard de Análisis de data de Producción',
			publishDate: 'Julio del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/ElWS-GYGpspMmjgWIYa-Qw8B5y7d9WJKuSkXdUlnJQk1Ag?e=rPX9f0',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690340554/Imagenes_Portafolio/proyecto2_dashboard_dbproducci%C3%B3n_idydbs.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690340554/Imagenes_Portafolio/proyecto2_tabladedatos_dbproducci%C3%B3n_hangqf.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690340553/Imagenes_Portafolio/proyecto2_tablasdin%C3%A1micas_dbproducci%C3%B3n_ghh2yc.png',
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
				'Generar gráficos para ayudar a la mejora de toma de decisiones en la organización',
			Technologies: [
				{
					title: 'Tecnologías usadas',
					techs: [
						'Excel:',
						'- Power Query',
						'- Tabla de datos',
						'- Tablas dinámicas',
						'- Gráficos',
						'- Macros',
					],
				},
			],
			ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Planteamiento del problema:'
				},
				{
					id: 2,
					details:
						'Mediante el uso de tablas dinámicas, gráficos dinámicos y macros elabora un dashboard que se actualice consumiendo información del archivo BD_producción (se genera mensualmente).'
				},
				{
					id: 3,
					details:
						'Indicadores y preguntas a resolver:  * Demanda por tipo de envío  * % de envíos entregados y devueltos según tipo de envío * nivel de pedidos entregados con éxitos * registro de la evolución de cantidad de pedidos según fecha * comparación en un grafico tipo torta de relación de prioridades este reporte es consumido por distintas área por lo que se debe poder personalizar la información que muestra el dashboard, se usarán segmentadores que permitan que se consulte la información correspondiente según la necesidad de cada persona.'
				},
				{
					id: 3,
					details:
						'Nota: se tiene que tener un archivo que contenga el dashboard y hojas adicionales que usted considere necesario, ya que el archivo BD_Producción es una hoja de consumo que le proporciona un área cada mes y para que genere el gráfico desde la misma base tendría que insertarle las macros y generar los gráficos durante cada mes'
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
		title: 'Proyecto Api tipo REST Full - PHP',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694450185/Imagenes_Portafolio/proeyecto-api-001_rq4r9r.png',
		ProjectHeader: {
			title: 'Proyecto Api tipo REST',
			publishDate: 'Enero del 2022',
			tags: 'Web',
			link: 'http://shermandeploy.byethost7.com/Backend_Apirest_PHP_users/users?page=1',
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
				'Conocer el funcionamiento de una API a nivel lógica de programación y código.',
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
						'En este caso la API es síncrona para cada requesta hay un response, este proyecto se realizó con PHP y se debió conocer el concepto del protocolo HTTP y sus verbos POST, GET, PU, PATCH, DELETE. En este caso se realizó para la entidad de usuario y sus características, que aparte de tener los request convecionales también tiene un sitema de seguridad para hacer estos request, en este caso se usa un sistema de autenticación para obtener resultados.',
				},
				{
					id: 2,
					details:
						'Solo se encuentra la interfaz de cómo es la api, próximamente se colocará el backend en un host para realizar los requests correspondientes.'
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
		title: 'Proyecto Ecommerce B2C - PHP',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694449300/Imagenes_Portafolio/proeyecto-ventas-001_kyc0id.png',
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
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694449300/Imagenes_Portafolio/proeyecto-ventas-001_kyc0id.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694449487/Imagenes_Portafolio/proeyecto-ventas-002_cvq1hz.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694449488/Imagenes_Portafolio/proeyecto-ventas-003_hv63t1.png',
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
				'Crear una aplicación web para el incremento de ventas de una microempresa. También poner en práctica los conceptos de programación, patrones de diseño, patrones de arquitectura y metdologías de proyectos.',
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
						'Credenciales de acceso:'
				},
				{
					id: 2,
					details:
						'- Rol cliente --> usuario: user01@gmail.com y password: user01'
				},
				{
					id: 4,
					details:
						'- Rol Admin --> usuario: admmin@gmail.com y password: admin'
				},
				{
					id: 5,
					details:
						'Consideraciones de la aplicación web:'
				},
				{
					id: 6,
					details:
						'- El proyecto se trabajó bajo programación estructurada, no se usó un patrón de arquitectura como el MVC por ejemplo. En su lugar fue de patrón libre sin embargo se puede diferenciar la división entre Interfaz, controlador y la conexión a base de datos.'
				},
				{
					id: 7,
					details:
						'- Se tiene módulos de interfaz principal, un about-us, Productos, Contacto, órdenes y uno para filtrar productos. Se cuenta un login y registro para el ingreso, esto como prerequisito para el uso de carrito de compras.'
				},
				{
					id: 8,
					details:
						'- Como se menciona en el objetivo es una aplicación web orientado al incremento de ventas en una empresa retail cuyos productos sean adecuados para la venta por internet. El modelo de este negocio es B2C dado que está orientado a vender al usuario final.'
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
		title: 'Proyecto Portfolio Versión1 2022 - React',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694422711/Imagenes_Portafolio/proeyecto-portfolio-001_nmpjav.png',
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
				'Crear una página web para mostrar los distintos proyectos que se avanzaron en el 2022.',
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
						'Este proyecto lista una cartera de proyectos útiles que sirvió como práctica para postular a prácticas, fue creada como primera versión de mi portfolio, es una landing page pero imcompleta de acuerdo a mi criterio para mostrar los diferentes proyectos, por ello se creó el portfolio web versión para suplir y tener un portfolio más completo.'
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
		id: 12,
		title: 'Proyecto Ecommerce B2C - PHP',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694422501/Imagenes_Portafolio/proeyecto-farmacia-004_f80tsl.png',
		ProjectHeader: {
			title: 'Proyecto Ecommerce - Comercial',
			publishDate: 'Junio del 2022',
			tags: 'Web',
			link: 'http://shermandeploy.byethost7.com/Proyecto_Farmacia_ultimate/',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694421306/Imagenes_Portafolio/proeyecto-farmacia-001_az5dtu.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694421306/Imagenes_Portafolio/proeyecto-farmacia-003_snrexx.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694421306/Imagenes_Portafolio/proeyecto-farmacia-002_ilopmu.png',
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
				'Crear una aplicación web para el incremento de ventas de una microempresa. También poner en práctica los conceptos de programación, patrones de diseño, patrones de arquitectura y metdologías de proyectos.',
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
						'Credenciales de acceso:'
				},
				{
					id: 2,
					details:
						'- Rol cliente --> usuario: user01@gmail.com y password: user01'
				},
				{
					id: 4,
					details:
						'- Rol Admin --> usuario: admmin@gmail.com y password: admin'
				},
				{
					id: 5,
					details:
						'Consideraciones de la aplicación web:'
				},
				{
					id: 6,
					details:
						'- El proyecto se trabajó bajo programación estructurada, no se usó un patrón de arquitectura como el MVC por ejemplo. En su lugar fue de patrón libre sin embargo se puede diferenciar la división entre Interfaz, controlador y la conexión a base de datos.'
				},
				{
					id: 7,
					details:
						'- Se tiene módulos de interfaz principal, un about-us, Productos, Contacto, órdenes y uno para filtrar productos. Se cuenta un login y registro para el ingreso, esto como prerequisito para el uso de carrito de compras.'
				},
				{
					id: 8,
					details:
						'- Como se menciona en el objetivo es una aplicación web orientado al incremento de ventas en una empresa retail cuyos productos sean adecuados para la venta por internet. El modelo de este negocio es B2C dado que está orientado a vender al usuario final.'
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
		id: 13,
		title: 'Sistema de gestión de Ventas e Inventario - PHP',
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
						'Este proyecto nos permite conocer cómo funciona de forma básica un sistema de Gestión de ventas dentro de un modelo de negocio tradicional de compra y ventas de productos.'
				}, {
					id: 2,
					details:
						'Dentro del sistema podemos observar:'
				},
				{
					id: 3,
					details:
						'- Un módulo de Ventas donde se puede procesar una nueva venta y se puede ver el hiprocesar una compra y ver el historial de compras.torial de estas.'
				},
				{
					id: 4,
					details:
						'- Un módulo de Gestión de productos, donde se puede recuperar productos en caso eliminarlos.'
				}, {
					id: 5,
					details:
						'- Un módulo de Gestión de Categorías, donde se puede recuperar categorias en caso eliminarlos.'
				},
				{
					id: 6,
					details:
						'- Un módulo de Gestión de clientes, donde se puede recuperar clientes en caso eliminarlos.'
				},
				{
					id: 7,
					details:
						'- Un módulo de Gestión de Usuarios, donde se puede recuperar Usuarios en caso eliminarlos.'
				},
				{
					id: 8,
					details:
						'- Un módulo de Configuración donde se puede actualizar datos.'
				},
				{
					id: 9,
					details:
						'- Un módulo de Gestión de Compras o Adquisiciones, donde se puede procesar una compra y ver el historial de compras.'
				},
				{
					id: 3,
					details:
						'Credenciales:'
				}, {
					id: 4,
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
	{
		id: 14,
		title: 'Proyecto App de Venta de Suplementos - MERN',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692823371/Imagenes_Portafolio/app-suplementos_byqzak.png',
		ProjectHeader: {
			title: 'Proyecto Ecommerce - Suplementos',
			publishDate: 'Julio del 2023',
			tags: 'Web',
			link: 'https://app-suplementos.netlify.app',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692823700/Imagenes_Portafolio/app-suplementos-1_ajwbe1.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692823610/Imagenes_Portafolio/app-suplementos-2_fzgdwc.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692823609/Imagenes_Portafolio/app-suplementos-3_havagm.png',
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
				'Crear una aplicación web para incrementar las ventas en la empresa.',
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
						'Esta app se realizó para conocer más sobre el modelo de negocio de un ecommerce y tener una plantilla lista como prototipo para implementarlo en cualquier empresa lista para entrar en el comercio electrónico.'
				},
				{
					id: 2,
					details:
						'Como se menciona en el objetivo es una aplicación web orientado al incremento de ventas en una empresa retail cuyos productos sean adecuados para la venta por internet. El modelo de este negocio es B2C dado que está orientado a vender al usuario final.'
				},
				{
					id: 3,
					details:
						'Credenciales:'
				},
				{
					id: 4,
					details:
						'- Es posible registrarse y loguearse para realizar compras.'
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
		id: 15,
		title: 'Proyecto Ejercicios React desde básico a Avanzado',
		category: 'Web',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692836312/Imagenes_Portafolio/app-ejercicios-react-1_fzpdrw.png',
		ProjectHeader: {
			title: 'Proyecto Ecommerce - Suplementos',
			publishDate: 'Julio del 2023',
			tags: 'Web',
			link: 'https://app-react-exercises.netlify.app/',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692836312/Imagenes_Portafolio/app-ejercicios-react-2_cxxmjj.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692836311/Imagenes_Portafolio/app-ejercicios-react-3_hrkujh.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1692836312/Imagenes_Portafolio/app-ejercicios-react-1_fzpdrw.png',
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
				'App para practicar react desde básico a Avanzado',
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
						'Esta app se realizó para practicar react desde los conceptos básicos a avanzados, pequeños proyectos que nos permitiràn realizar un proyecto más grande.'
				},
				{
					id: 2,
					details:
						'Hasta el momento estamos practicando los temas de render, virtual DOM, programación estructurada, programación orientada a objetos, props, hooks (useState, useEffect), mètodos más comunes(map, find, filter, includes), spreadOperator'
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
		id: 16,
		title: 'Dashboard Análisis Financiero - Power BI',
		category: 'Data Analytics',
		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694147649/Portfolio_Data-Analytics/proyecto-financial-data-001_zod3ol.png',
		ProjectHeader: {
			title: 'Dashboard Análisis de ventas en Australia',
			publishDate: 'Marzo del 2023',
			tags: 'Data Analytics',
			link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/EmtjhPZ26WpLu8ipBb1u_D4BJ4otMaF-OW4xCDu-t1QPDQ?e=Ibx5ed',
		},
		ProjectImages: [
			{
				id: 1,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694147649/Portfolio_Data-Analytics/proyecto-financial-data-001_zod3ol.png',
			},
			{
				id: 2,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694147649/Portfolio_Data-Analytics/proyecto-financial-data-002_etldug.png',
			},
			{
				id: 3,
				title: '',
				img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1694147649/Portfolio_Data-Analytics/proyecto-financial-data-003_dt1kg3.png',
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
				'Analizar las finanzas de una empresa en base a la data Financial_Sample (Microsoft Power BI)',
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
						'Este dataset nos permite conocer las ventas y beneficios obtenidos en una empresa, gobierno, mercados, etc. Además nos muestra campos como el nombre de producto, fecha, unidades vendidas, descuento, precio bruto, beneficio, Pais de venta, etc.'
				},
				{
					id: 2,
					details:
						'Observamos el dashboard del proyecto y decimos: '
				}, {
					id: 3,
					details:
						'- Tenemos un gráfico tipo matriz que describe el COGS(Costo de Bienes Vendidos), pocentage de COGS, ventas en base al tipo de segmento empresarial.'
				}, {
					id: 4,
					details:
						'- Tenemos un gráfico tipo matriz que describe el COGS(Costo de Bienes Vendidos), pocentage de COGS, ventas en base al tipo de producto de venta.'
				},{
					id: 5,
					details:
						'- Tenemos un gráfico de columnas agrupadas y de líneas donde se analiza los COGS y ventas por fecha(año y mes).'
				}, {
					id: 6,
					details:
						'- Tenemos un gráfico de Anillos donde se analiza las ventas Totales por tipo de Producto.'
				}, {
					id: 7,
					details:
						'- Tenemos un gráfico tipo mapa donde se analiza las venta hechas por País.'
				},{
					id: 8,
					details:
						'- Tenemos dos gráficos tipo tarjeta donde se mustra los resultados de las ventas Totales y el COGS total.'
				},{
					id: 9,
					details:
						'- Tenemos segmentadores de datos que filtrar datos por Año y mes, estos interactúan con todos los gráficos del dashboard.'
				},  {
					id: 8,
					details:
						'Podemos concluir que:'
				}, {
					id: 9,
					details:
						'- Podemos concluir en base al análisis comparativo de ventas realizadas por fecha, que en el año con más ingresos de ventas obtenidas fue 2014 de forma análoga el mes con màs ventas fue en Octubre con 12,38 millones, por otra parte el año con menos ventas fue el 2013 y el mes fue Septiembre con 4,48 millones.'
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



// { 
	// id: 99, 
	// title: 'Dashboard Análisis Escuelas por estado',
	// category: 'Data Analytics',
	// img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-4_cru0l2.png',
	// ProjectHeader: {
	// 	title: 'Dashboard Análisis Escuelas por estado',
	// 	publishDate: 'Febrero del 2023',
	// 	tags: 'Data Analytics',
	// 	link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/EqFYbljd1UBOuwBWc4mSqBIBgmwa7pL9fVmMnOq228m3nQ?e=eam7ec',
	// },
	// ProjectImages: [
	// 	{
	// 		id: 1,
	// 		title: '',
	// 		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690663442/Imagenes_Portafolio/proyecto2_dashboard_estudiantes_0_d8tiul.png',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: '',
	// 		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690663442/Imagenes_Portafolio/proyecto2_dashboard_estudiantes_1_zbok3b.png',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: '',
	// 		img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690663442/Imagenes_Portafolio/proyecto2_dashboard_estudiantes_2_mw0jlk.png',
	// 	},
	// ],
	// ProjectInfo: {
	// 	ClientHeading: 'Acerca del cliente	',
	// 	CompanyInfo: [
	// 		{
	// 			id: 1,
	// 			title: 'Nombre',
	// 			details: 'Proyecto Personal',
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Servicios',
	// 			details: '-',
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Website',
	// 			details: '-',
	// 		},
	// 		{
	// 			id: 4,
	// 			title: 'Celular',
	// 			details: '-',
	// 		},
	// 	],
	// 	ObjectivesHeading: 'Objetivo',
	// 	ObjectivesDetails:
	// 		'Analizar dataset de Escuelas por estado para toma de decisiones',
	// 	Technologies: [
	// 		{
	// 			title: 'Tecnologías usadas',
	// 			techs: [
	// 				'PowerBI',
	// 			],
	// 		}
	// 	],
	// 	ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
	// 	ProjectDetails: [
	// 		{
	// 			id: 1,
	// 			details:
	// 				'En este dataset observamos las escuelas que existen en cada municipio y localidad en Mexico; las coordenadas donde quedan estas escuelas; y la cantidad de personal que se tiene por escuela.'
	// 		}, {
	// 			id: 2,
	// 			details:
	// 				'Observamos el dashboard del proyecto y decimos:'
	// 		}, {
	// 			id: 3,
	// 			details:
	// 				'- Tenemos la cantidad de escuelas por tipo de escuela, y también el total de escuelas dentro de país.'
	// 		}, {
	// 			id: 4,
	// 			details:
	// 				'- Tenemos filtros por entidad o localidad, municipio, y por el rango de personal que hay por escuela.'
	// 		}, {
	// 			id: 5,
	// 			details:
	// 				'- Tenemos un mapa para visualizar de forma dinámica en base a los filtros realizados.'
	// 		}, {
	// 			id: 6,
	// 			details:
	// 				'Podemos concluir que:'
	// 		}, {
	// 			id: 7,
	// 			details:
	// 				'- El análisis de este dashboard, nos permite conocer la cantidad apróximada de escuelas por locacalidad, municipio y tipo. Así también conocer la cantidad de personal ocupado que hay por escuela o en un conjunto de escuelas dentro de un municipio o localidad del país.'
	// 		},


	// 	],
	// 	SocialSharingHeading: 'Compartir proyecto',
	// 	SocialSharing: [
	// 		{
	// 			id: 1,
	// 			name: 'Twitter',
	// 			icon: <FiTwitter />,
	// 			url: 'https://twitter.com/',
	// 		},
	// 		{
	// 			id: 2,
	// 			name: 'Instagram',
	// 			icon: <FiInstagram />,
	// 			url: 'https://instagram.com/',
	// 		},
	// 		{
	// 			id: 3,
	// 			name: 'Facebook',
	// 			icon: <FiFacebook />,
	// 			url: 'https://facebook.com/',
	// 		},
	// 		{
	// 			id: 4,
	// 			name: 'LinkedIn',
	// 			icon: <FiLinkedin />,
	// 			url: 'https://linkedin.com/',
	// 		},
	// 		{
	// 			id: 5,
	// 			name: 'Youtube',
	// 			icon: <FiYoutube />,
	// 			url: 'https://www.youtube.com/',
	// 		},
	// 	],

	// }
// },
// {
	// id: 100,
	// 	title: 'Dashboard de zonas con más daños por temblor',
	// 	category: 'Data Analytics',
	// 	img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1679590099/Imagenes_Portafolio/dashboard-2_eztrvr.png',
	// 	ProjectHeader: {
	// 		title: 'Dashboard de zonas con más daños por temblor',
	// 		publishDate: 'Marzo del 2023',
	// 		tags: 'PowerBI',
	// 		link: 'https://unmsmmail-my.sharepoint.com/:f:/g/personal/german_huaytalla_unmsm_edu_pe/Er8n7PS1Z2dEn1jmgm8I6J4BnrsdXY4_OgKVKdRHDSliKA?e=RXv4ax',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690667823/Imagenes_Portafolio/proyecto3_dashboard_temblores_0_iu7isl.png',
	// 		},
	// 		{
	// 			id: 2,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690667823/Imagenes_Portafolio/proyecto3_dashboard_temblores_2_a2haz1.png',
	// 		},
	// 		{
	// 			id: 3,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1690667823/Imagenes_Portafolio/proyecto3_dashboard_temblores_3_thniqf.png',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'Acerca del cliente	',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Nombre',
	// 				details: 'Proyecto Personal',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Servicios',
	// 				details: '-',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: '-',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Celular',
	// 				details: '-',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objetivo',
	// 		ObjectivesDetails:
	// 			'Analizar zonas con más daños por temblor para la toma de decisiones.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tecnologías usadas',
	// 				techs: [
	// 					'PowerBI',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Observamos el dashboard del proyecto y decimos:'
	// 			}, {
	// 				id: 2,
	// 				details:
	// 					'- Tenemos un heatmap o mapa de calor que nos indica las zonas de impacto de mayor intesidad y a su vez mayor frencuencia.'
	// 			}, {
	// 				id: 3,
	// 				details:
	// 					'- Tenemos un TreeMap o Mapa tipo Árbol que nos muestra el recuento de lugar de impacto.'
	// 			}, {
	// 				id: 4,
	// 				details:
	// 					'- Tenemos un filtro por tipo de daño que interacciona con el HeatMap y TreeMap, para mapear las zonas y el lugar donde más impacto tuvo el temblor.'
	// 			}, {
	// 				id: 5,
	// 				details:
	// 					'Podemos concluir que:'
	// 			}, {
	// 				id: 6,
	// 				details:
	// 					'- Las zona con mayores daños del sismo fue al sur de Mexico donde en su mayoría fueron perjudicados departamentos, casa, comercio y edificios.'
	// 			}

	// 		],
	// 		SocialSharingHeading: 'Compartir proyecto',
	// 		SocialSharing: [
	// 			{
	// 				id: 1,
	// 				name: 'Twitter',
	// 				icon: <FiTwitter />,
	// 				url: 'https://twitter.com/',
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Instagram',
	// 				icon: <FiInstagram />,
	// 				url: 'https://instagram.com/',
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Facebook',
	// 				icon: <FiFacebook />,
	// 				url: 'https://facebook.com/',
	// 			},
	// 			{
	// 				id: 4,
	// 				name: 'LinkedIn',
	// 				icon: <FiLinkedin />,
	// 				url: 'https://linkedin.com/',
	// 			},
	// 			{
	// 				id: 5,
	// 				name: 'Youtube',
	// 				icon: <FiYoutube />,
	// 				url: 'https://www.youtube.com/',
	// 			},
	// 		],

	// 	}
	// },
	// {
	// 	id: 101,
	// 	title: 'Filtro en Excel con Macros - Excel',
	// 	category: 'Data Analytics',
	// 	img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
	// 	ProjectHeader: {
	// 		title: 'Filtro en Excel',
	// 		publishDate: 'Enero del 2023',
	// 		tags: 'Data Analytics',
	// 		link: 'https://unmsmmail-my.sharepoint.com/:x:/g/personal/german_huaytalla_unmsm_edu_pe/ES2uWCY0SZJGsAcEU_02ptkBukpRaSUHQBm-OqeZohEXkw?e=Mbv72G',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
	// 		},
	// 		{
	// 			id: 2,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
	// 		},
	// 		{
	// 			id: 3,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/proyecto-filtro-excel_sfkkpl.png',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'Acerca del cliente	',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Nombre',
	// 				details: 'Proyecto Personal',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Servicios',
	// 				details: '-',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: '-',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Celular',
	// 				details: '-',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objetivo',
	// 		ObjectivesDetails:
	// 			'Realizar  filtro de datos para encontrar data de forma rápida',
	// 		Technologies: [
	// 			{
	// 				title: 'Tecnologías usadas',
	// 				techs: [
	// 					'EXCEL',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Es preferible descargar el archivo, ya que el proyecto está hecho en Macros.'
	// 			}, {
	// 				id: 2,
	// 				details:
	// 					'Este proyecto permite buscar en base a datos de clientes, en base a DNI y Nombre de clientes. Se observa que se carga datos en una hoja de excel, luego se usa macros para realizar un análisis comparativo para filtrar los detalles de un cliente en específico.'
	// 			},


	// 		],
	// 		SocialSharingHeading: 'Compartir proyecto',
	// 		SocialSharing: [
	// 			{
	// 				id: 1,
	// 				name: 'Twitter',
	// 				icon: <FiTwitter />,
	// 				url: 'https://twitter.com/',
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Instagram',
	// 				icon: <FiInstagram />,
	// 				url: 'https://instagram.com/',
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Facebook',
	// 				icon: <FiFacebook />,
	// 				url: 'https://facebook.com/',
	// 			},
	// 			{
	// 				id: 4,
	// 				name: 'LinkedIn',
	// 				icon: <FiLinkedin />,
	// 				url: 'https://linkedin.com/',
	// 			},
	// 			{
	// 				id: 5,
	// 				name: 'Youtube',
	// 				icon: <FiYoutube />,
	// 				url: 'https://www.youtube.com/',
	// 			},
	// 		],

	// 	}
	// },
	// {
	// 	id: 102,
	// 	title: 'Proyecto simulado de Netflix - PHP',
	// 	category: 'Web',
	// 	img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
	// 	ProjectHeader: {
	// 		title: 'Proyecto Ecommerce - Comercial',
	// 		publishDate: 'Febrero del 2022',
	// 		tags: 'Web',
	// 		link: 'http://shermandeploy.byethost7.com/Netflix_ultimate/movie.html',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
	// 		},
	// 		{
	// 			id: 2,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
	// 		},
	// 		{
	// 			id: 3,
	// 			title: '',
	// 			img: 'https://res.cloudinary.com/dz0ajaf3i/image/upload/v1689974066/Imagenes_Portafolio/pryecto-netflix-php_jjenyf.webp',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'Acerca del cliente	',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Nombre',
	// 				details: 'Proyecto Personal',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Servicios',
	// 				details: '-',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: '-',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Celular',
	// 				details: '-',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objetivo',
	// 		ObjectivesDetails:
	// 			'Crear una aplicación web para el simular la web de Netflix',
	// 		Technologies: [
	// 			{
	// 				title: 'Tecnologías usadas',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'PHP',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Datos y Desafíos del Proyecto',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Credenciales:'
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'- Rol cliente--> usuario: usuario@gmail.com y password: 123456'
	// 			},

	// 		],
	// 		SocialSharingHeading: 'Compartir proyecto',
	// 		SocialSharing: [
	// 			{
	// 				id: 1,
	// 				name: 'Twitter',
	// 				icon: <FiTwitter />,
	// 				url: 'https://twitter.com/',
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Instagram',
	// 				icon: <FiInstagram />,
	// 				url: 'https://instagram.com/',
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Facebook',
	// 				icon: <FiFacebook />,
	// 				url: 'https://facebook.com/',
	// 			},
	// 			{
	// 				id: 4,
	// 				name: 'LinkedIn',
	// 				icon: <FiLinkedin />,
	// 				url: 'https://linkedin.com/',
	// 			},
	// 			{
	// 				id: 5,
	// 				name: 'Youtube',
	// 				icon: <FiYoutube />,
	// 				url: 'https://www.youtube.com/',
	// 			},
	// 		],

	// 	}
	// },
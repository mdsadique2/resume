export const data = {
    personalDetails: {
        name: 'Md Sadique Quraishi',
        designation: 'Frontend/UI Engineer',
        contact: '+91-88843-99330',
        email: 'mdsadique2@gmail.com',
        location: 'Bangalore, India',
    },

    summary: {
        label: "Summary",
        text: "Front-end / UI Developer with enthusiasm for great UX, eye for a good design and experience from E-commerce, SAAS and Consumer electronics companies.",
        icon: 'summary'
    },

    education:{
        label: 'Education',
        icon: 'education',
        values: [
            {
                board: 'WBUT',
                course: 'B.Tech (IT)',
                score: '8.27',
                duration: '2009-13'
            },
            {
                board: 'CBSE',
                course: 'AISSCE (XII)',
                score: '72%',
                duration: '2009'
            },
            {
                board: 'CBSE',
                course: 'AISSE (X)',
                score: '82%',
                duration: '2007'
            }
        ]
    },

    skills: {
        label: 'Skills',
        icon: 'skills',
        values: [
            {
                label: 'HTML',
                icon:''
            },
            {
                label: 'JavaScript',
                icon:''
            },
            {
                label: 'CSS',
                icon:''
            },
            {
                label: 'React',
                icon:''
            },
            {
                label: 'Vue',
                icon:''
            },
            {
                label: 'AngularJs',
                icon:''
            },
            {
                label: 'SASS',
                icon:''
            },
            {
                label: 'TypeScript',
                icon:''
            },
        ]
    },

    experience: {
        label: 'Work Experience',
        icon: 'experience',
        values: [
            {
                company: 'Microsoft',
                duration: 'September 2021 - Present',
                role: 'Software Engineer',
                location: 'Bangalore, IN',
                projects: [{
                    name: 'Viva Goals',
                    description: `As part of R&D division, The project is to to integrate Ally's OKRs tool to Microsoft's environment by migrating it to react and adapting the design language of microsoft(FluentUI)`
                }]
            },
            {
                company: 'Amazon',
                duration: 'April 2020 - August 2021',
                role: 'Frontend Engineer',
                location: 'Bangalore, IN',
                projects: [{
                    name: 'SellerFlex',
                    description: `Seller-flex is a WMS that brings flexibility for sellers to sell from their warehouses and allow them to receive benefits like Prime and FBA.`
                }]
            },
            {
                company: 'Essential Products',
                duration: 'August 2019 - March 2020',
                role: 'Senior Software Engineer',
                location: 'Bangalore, IN',
                projects: [{
                    name: 'OTA (Over The Air)',
                    description: `It is the application that is used to release updates to the gem devices. The devices can be grouped and configured by using the tool.`
                },
                {
                    name: 'Device Logs',
                    description: `The app is a one-stop log checking tool for Gem. Devices can generate huge amounts of logs for various operations and failures that can be traced by using the tool.`
                },
                {
                    name: 'App Store',
                    description: `The app was a mini version of google play store which is used to publish and release updates for all the apps in Gem.`
                }]
            },
            {
                company: 'Boomerang Commerce',
                duration: 'September 2015 - July 2019',
                role: 'SDE II UI',
                location: 'Bangalore',
                projects: [{
                    name: 'Price Performance Management',
                    description: 'It is the application that makes pricing recommendations based on a series of external factors — including consumer demand, market elasticity and competitive pricing — and internal factors — including traffic, deal profiles and sell-through targets.'
                },
                {
                    name: 'CommerceIQ',
                    description: 'It is a Digital Shelf Monitoring application that helps brands to monitor their performance on various eCommerce platforms. The UI code is written in VUE.js'
                }
            ]
            },
            {
                company: 'Coupons.com',
                duration: 'July 2014 - August 2015',
                role: 'Software UX Engineer',
                location: 'Bangalore',
                projects: []
            },
            {
                company: 'DreamNotion Innovations',
                duration: 'September 2013 - June 2014',
                role: 'Web Developer',
                location: 'Bangalore',
                projects: []
            }
        ]
    }
}

export default data;
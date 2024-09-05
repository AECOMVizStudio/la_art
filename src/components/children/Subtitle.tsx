interface SectionItem {
    id:number;
    title:string;
    subtitle?:string | string[];
    question?: string[];
    answer?: string[];
    href:string;
}

const mainContent: SectionItem[] = [
    {
        id: 1,
        title:'Upcoming Meetings',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque officia laboriosam repudiandae perferendis quas eligendi velit nostrum accusamus necessitatibus!',

        href: '/'
    },
    {   
        id: 2,
        title:'About the Project',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque officia laboriosam repudiandae perferendis quas eligendi velit nostrum accusamus necessitatibus!',
        href: '/'
    },
    {
        id:3,
        title:'General Plan Amendment',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque officia laboriosam repudiandae perferendis quas eligendi velit nostrum accusamus necessitatibus!',
        href: '/'
    },
    {
        id:4,
        title:'Current Project Status',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque officia laboriosam repudiandae perferendis quas eligendi velit nostrum accusamus necessitatibus!',
        href: '/'
    },
    {
        id:5,
        title:'FAQ',
        subtitle: '',
        question: ['Question 1', 'Question 2', 'Question 3'],
        answer: ['Answer 1', 'Answer 2', 'Answer 3'],
        href: '/'
    },
]


const Subtitle = () => {
    return (
        <div className="container flex-col">

            {mainContent.map((content) => (
                <section key={content.id} className="bg-slate-100 border-2 border-slate-200 rounded p-4 m-8">
                    <h2 className="text-3xl font-bold underline text-blue-600">{content.title}</h2>
                    <p className="font-medium">{content.subtitle}</p>
                    <a href={content.href}>Link here</a>
                </section>
            ))}


        </div>
  )
}

export default Subtitle
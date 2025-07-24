import '../styles/global.css'

const sideList = [
    {
        title: '装机必备',
        key: '',
        path: '',
        icon: ''
    }, {
        title: 'AI 工具',
        key: '',
        path: '',
        icon: ''
    }
]

export default function Side() {
    return (
        <div className='w-[150px]'>
            {
                sideList.map(item => {
                    return (
                        <div className='h-[48px] rounded-[4px] leading-[48px] text-center'>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    )
}
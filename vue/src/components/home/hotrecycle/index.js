import './index.css'
export const Box = {
    props: {
        url: String,
        href: String,
        className: String,
        type: {
            type: Number,
        }
    },
    render(create) {
        if (this.type === 0) {
            return <li class = "hot" >
                <
                a href = {
                    this.href
                } >
                <
                img src = {
                    this.url
                }
            alt = ""
            class = 'hot-img' / >
                <
                img class = "icon_hot"
            src = "http://m.youdemai.com/images/index/recycle_index_icon/icon_hot.png" > < /img> < /
            a > <
                /li>
        } else {
            return <li class = {
                    `other ${this.className}`
                } >
                <
                a href = {
                    this.href
                } >
                <
                img src = {
                    this.url
                }
            alt = ""
            class = 'other-img' / >
                <
                /a>

                <
                /li>
        }

    }

}
export default {
    name: 'HomeBox',
    props: {
        type: {
            type: Number,
        },
        list: {
            type: Array
        }
    },
    render(create) {
        const line = this.list.length % 3 === 0 ? this.list.length - 3 : this.list.length - this.list.length % 3
        return this.list && this.list.length > 0 ? < ul class = {
                `home-box ${this.type === 0 ? 'hot-box':'other-box'}`
            } > {
                this.list.map((item, index) => {
                    return <Box type = {
                        this.type
                    }
                    url = {
                        item.url
                    }
                    href = {
                        item.href
                    }
                    key = {
                        index
                    }
                    className = {
                        `${index < line ?'line-bottom':''} ${ (index+1)%3 ===0   ?'':'line-right'} `
                    } > < /Box>
                })
            } <
            /ul>:null
    }
}
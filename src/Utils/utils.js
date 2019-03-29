
export default {
    formatDate(time) {
        if (time) {
            let date = new Date(time);
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
                + (date.getDate()) + " " + (date.getHours() > 9 ? date.getHours() : (`0` + date.getHours()))
                + ":" + (date.getMinutes() > 0 ? date.getMinutes() : (`0` + date.getMinutes())) + ":"
                + (date.getSeconds() > 9 ? date.getSeconds() : (`0` + date.getSeconds()))
        } else {
            return ""
        }

    },
    pagination(data, callback) {
        let page = {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total,
            showTotal: () => {
                return `共${data.result.total}条`
            },
            showQuickJumper: true

        }
        return page

    }
}
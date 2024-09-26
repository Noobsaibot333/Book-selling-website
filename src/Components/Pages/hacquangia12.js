import Detail from "../Function/DetailProduct/DetailProduct"
import ImportImage from "../Images/ImportImage"
import { memo } from "react";
function Hacquangia12() {
    return (
        <>
            <Detail
            images={[{url: ImportImage.img9,},{ url: ImportImage.img39,},{url: ImportImage.img40,}]}
            infor={{
                title: 'Hắc Quản Gia - 12',
                code:'SKU: 8935250712064',
                princeCurren:'46,750',
                princeOld:'55,000',
                author:'Jun Mayuzuki',
                public: '2024',
                size:'13 x 18 cm',
                placeCompany:'Hà Nội',
                format:'Bìa mềm',
                briefs:[
                    'Nào, xin hãy gọi tên tôi… thưa chủ nhân.',
                    'Các thành viên gánh xiếc đột nhập dinh thự Phantomhive vắng chủ. Cùng lúc ấy, theo lệnh chủ nhân, quản gia Sebastian đặt dấu chấm hết cho mọi chuyện… Chàng hề đánh mất tất cả, giọt nước mắt đau đớn cháy rụi trong ngọn lửa đỏ rực…',
                    'Trân trọng gửi tới bạn bộ truyện tranh về quản gia lạnh lùng nhất thế gian…',
                ]
        
            }}
             />
        </>
       
    );
}

export default memo(Hacquangia12) ;
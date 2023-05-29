import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Anda lupa memasukkan nama!'),
  email: yup.string().email().required('Anda lupa memasukkan tag @!'),
  comment: yup.string().required('Kamu harus mengajukan permintaanmu agar bisa kami ditindak lanjut!'),
});

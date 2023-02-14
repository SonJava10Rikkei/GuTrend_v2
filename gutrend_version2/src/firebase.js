import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Đây là file config cá nhân được khởi tạo dự trên firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZCv3ZwH9-O3L5RD7WwE9YuwUCBz9WOIE",
  authDomain: "updatefile-tmdt.firebaseapp.com",
  projectId: "updatefile-tmdt",
  storageBucket: "updatefile-tmdt.appspot.com",
  messagingSenderId: "434391628009",
  appId: "1:434391628009:web:77cb25a524d76a047b5878",
  measurementId: "G-1N95S5Y9H0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu trữ của bạn
export const storage = getStorage(app);
import { useDispatch } from "react-redux";
import Button from "../Button";
import Modal from "react-modal";
import { loginUser, closeModalLogin } from "../../redux/actions";
export default function ModalLogin({ modalIsOpen, closeModal }) {
  
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#182335", // Màu nền trong suốt
      padding: "20px", // Thêm khoảng cách bên trong nếu cần
      borderRadius: "10px", // Bo góc nếu cần
      border: "0px solid #ccc", // Thêm đường viền nếu cần
      zIndex: 9999, // High zIndex to ensure it's on top
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)", // Màu nền của lớp phủ
      zIndex: 9999, // High zIndex to ensure it's on top
    },
  };
  const handleLoginGg = async () => {
    await dispatch(loginUser());
    dispatch(closeModalLogin());
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-white">
        <div className="mb-4">
          <h1 className=" text-xl">Welcome back!</h1>
          <span className="text-sm text-[#747c88]">
            Sign in to your account
          </span>
        </div>
        <div className="flex justify-center mt-3">
          {/* dang nhap voi gg */}
          <Button
            onclick={handleLoginGg}
            className="flex items-center justify-between p-3 rounded-md bg-[#182b49]"
          >
            <span className="w-4 mr-3">
              <mat-icon
                _ngcontent-ng-c2231880015=""
                role="img"
                class="mat-icon notranslate mat-icon-no-color ng-star-inserted"
                aria-hidden="true"
                data-mat-icon-type="svg"
                data-mat-icon-name="auth_service_google_24dp"
                data-mat-icon-namespace="firebase"
              >
                <svg
                  height="100%"
                  viewBox="0 0 20 20"
                  width="100%"
                  fit=""
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                    fill="#EA4335"
                  ></path>
                </svg>
              </mat-icon>
            </span>
            <span className="text-[13px]">Đăng nhập với google</span>
          </Button>
        </div>

        <div className="text-sm mt-3 flex justify-center">
          <span>Don't have an account ?</span>
          <span className="ml-3 text-[#8bbadd] cursor-pointer">
            Register Now
          </span>
        </div>
      </div>
    </Modal>
  );
}

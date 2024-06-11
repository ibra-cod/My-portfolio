import Button from "../Components/Button";
import Input from "../Components/Input";
import Textarea from "../Components/textarea";

export default function Contact() {
  return (
       <section className="section max-w-screen-2xl mx-auto flex justify-center items-center mt-16">
            <div className=" w-4/5 bg-indigo-700 rounded-lg text-white   mt-10 flex p-5">
                        <div className=" mt-10 m-5 w-6/12">
                           <div>
                                <h1 className=" font-bold text-2xl ">Feel Free to contact me !</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, sunt ipsum. Cupiditate corporis, eligendi magni autem, earum, perspiciatis necessitatibus laboriosam laborum natus totam pùdolores velit! Officiis culpa at dolorem quidem.</p>
                           </div>
                           <div className="">
                                    <p></p>
                           </div>
                        </div>
                        

                        <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 w-6/12 rounded-lg ">
                            <div className=" w-11/12 text-white mx-auto mt-10 text-center ">
                                <form className="text-center p-5" action="" method="post">
                                   <Input type={'text'} name={'input'} label={'Your name'} />
                                   <Input type={'text'} name={'input'} label={'Your email'} />
                                   <Textarea label={'your message'} />
                                   <Button type={'submit'}>
                                    Submit
                                     </Button>
                                </form>
                            </div>
                        </div>
            </div>
        </section>
  )
}


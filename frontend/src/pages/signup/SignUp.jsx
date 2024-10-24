import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className='flex flec-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter background-blur-lg bg-opacity-50'>
            <h1 className='text-3xl font-semibold text-center text-grey-300'>
                Sign Up <span className='text-amber-950'> CosmicConnect</span>
            </h1>
            <form>
                <div >
                    <label className='label'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder='John Doe'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <div >
                    <label className='label'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder='johndoe'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                
                <GenderCheckbox />

                <a href="#" className='text-sm text-slate-900 hover:underline hover:text-amber-950 mt-2 inline-block'>
                        Already have an account?
                    </a>
                <div>
                    <button className='btn bg-gray-800 btn-block hover:bg-amber-950 btn-sm mt-2'>Sign Up</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp;

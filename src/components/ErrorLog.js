import React from 'react'

const ErrorLog = ({touchErrorLog}) => {
    return ( 
        <div className='error-window'>
            <div className='header-window'>
                <span>error.log</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchErrorLog()}>X</span>
                </div>
            </div>
            <div className='error-content'>
                <div className='error-item'>
                  <p style={{margin: '0px'}}>
                        DH5372:<br/>
                            Too many packets sent to the server<br/><br/>


                        MS9620:<br/>
                            The server is not responding<br/><br/>


                        HS2364:<br/>
                            We heard you but I cannot respond I don’t know why <br/>
                            Execute prog -test [nom du programme]<br/><br/>


                        KM9030:<br/>
                                Missing files for the execution<br/><br/>


                        FG9604:<br/>
                                KERNEL APC PENDING DURING EXIT<br/><br/>


                        LM7624:<br/>
                                INVALID PROCESS ATTACH ATTEMPT<br/><br/>


                        PH5458:<br/>
                            PAGE NOT ZERO<br/><br/>


                        HJ5856:<br/>
                            WORKER THREAD RETURNED WITH BAD IO PRIORITY<br/><br/>


                        GT6657:<br/>
                                CNSS FILE SYSTEM FILTER<br/><br/>


                        GJ5486:<br/>
                                INTERNAL POWER ERROR<br/><br/>


                        JP8756:<br/>
                            HAL MEMORY ALLOCATION<br/><br/>


                        JD5864:<br/>
                            NETWORK BOOT INITIALIZATION FAILED<br/><br/>


                        NW0RJX:<br/>
                            IRQL UNEXPECTED VALUE<br/><br/>


                        F43PZL:<br/>
                            PAGE FAULT BEYOND END OF ALLOCATION<br/><br/>


                        58WVQ5:<br/>
                            SHARED RESOURCE CONV ERROR<br/><br/>


                        UICNOB: <br/>
                        STREAMS_INTERNAL_ERROR<br/><br/>


                        EHLSKG: <br/>
                        FATAL_UNHANDLED_HARD_ERROR<br/><br/>


                        0J5EFK: <br/>
                        PFN_LIST_CORRUPT<br/><br/>


                        CN2LZ8: <br/>
                        SET_ENV_VAR_FAILED<br/><br/>


                        6R4E6K: <br/>
                        039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to     contain severe errors when it was submitted to your COBOL system.<br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        CMV8K4:<br/>
                        012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>


                        2THJHC: <br/>
                            028 Segmented program - ANIM ignored (Cautionary)<br/>
                        You have tried to generate for animation a segmented program<br/><br/>

                        Resolution:<br/>
                        Remove any segments from your original program.<br/><br/>






                        I8G4N3:<br/>
                            078 Too many code relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        P5Q83D:<br/>
                            013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/><br/>


                        NJ79WM: <br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        MD1MVV:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        MBE7GM:<br/>
                        054 Parameter type cannot be passed by value (Recoverable)<br/>
                        Only those COMP-5 items that are 4 bytes or smaller can be passed by value.<br/><br/>

                        Resolution:<br/>
                        Ensure that any COMP-5 items are no larger than 4 bytes.<br/><br/>


                        9VI0II:<br/>
                            007 Write failure on generated code file (Recoverable)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        Delete any files you no longer need.<br/><br/>


                        L3IY4Z: <br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/><br/>

                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        EX5103:<br/>
                            RAM IS INSUFFICIENT<br/>
                                Execute ram -u -info<br/><br/>


                        R0YSKQ:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:<br/><br/>

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>


                        5P7MHO:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        LC7EW8:<br/>
                        054 Parameter type cannot be passed by value (Recoverable)<br/>
                        Only those COMP-5 items that are 4 bytes or smaller can be passed by value.<br/><br/>

                        Resolution:<br/>
                        Ensure that any COMP-5 items are no larger than 4 bytes.<br/><br/>


                        YIUQSG:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:<br/><br/>

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>


                        7JLGC9: <br/>
                        077 Generated code module too large (limit = limit bytes) (Recoverable)<br/><br/>

                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>




                        D5QQHB:<br/>
                        013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/><br/>


                        MOB7WJ: <br/>
                            040 Bad program-id or entry name (Recoverable)<br/>
                        The name you have given in the PROGRAM-ID clause or the ENTRY...USING phrase, or as the root of the input file-name, cannot be handled correctly by your system assembler.<br/><br/>

                        Resolution:<br/>
                        Change the name to comply with your operating system's rules for a function-name.<br/><br/>


                        4H4VGK:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>


                        WH9MIQ:<br/>
                            007 Write failure on generated code file (Recoverable)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        Delete any files you no longer need.<br/><br/>


                        JEMCN1:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        HZTN9L:<br/>
                        054 Parameter type cannot be passed by value (Recoverable)<br/>
                        Only those COMP-5 items that are 4 bytes or smaller can be passed by value.<br/><br/>

                        Resolution:<br/>
                        Ensure that any COMP-5 items are no larger than 4 bytes.<br/><br/>


                        QQUHK8: <br/>
                            040 Bad program-id or entry name (Recoverable)<br/>
                        The name you have given in the PROGRAM-ID clause or the ENTRY...USING phrase, or as the root of the input file-name, cannot be handled correctly by your system assembler.<br/><br/>

                        Resolution:<br/>
                        Change the name to comply with your operating system's rules for a function-name.<br/><br/>


                        NLZTH9:<br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        4KX01V:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        8A61EL:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        ZDX7YQ:<br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        ZWQBZJ:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:<br/><br/>

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>


                        X1O16K:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        EHP26D:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        V99RCM:<br/>
                            007 Write failure on generated code file (Recoverable)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        Delete any files you no longer need.<br/><br/>



                        XKYB85:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:<br/>

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>


                        EMQNA4:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        KK9IDH:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        H3VEEW:<br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        PCC0IA:<br/>
                            013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/><br/>

                        Resolution:<br/>
                        Resubmit your source code to your COBOL system to try to obtain valid intermediate code.<br/><br/>


                        O9NYBY:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        ADALV2:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:<br/><br/>

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>

                        5BOWWJ:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        FFG8OD:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        3RMLLV:<br/>
                            075 Call-convention not supported (Recoverable)<br/>
                        Illegal call-convention on an entry-point.<br/><br/>


                        L6I848:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        RM167S:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        SA0VCM:<br/>
                        006 Read failure on input file, not intermediate code or wrong version (Recoverable)<br/>
                        One of the following has occurred:<br/><br/>

                        The input file you have specified is not an intermediate code file.<br/><br/>

                        The intermediate code file was produced by a version of your COBOL system that is not compatible with your current version.<br/><br/>

                        Your input file is corrupt.<br/>
                        Resolution:<br/>
                        Ensure that you specify an intermediate code file.<br/><br/>


                        I2DGEJ:<br/>
                            007 Write failure on generated code file (Recoverable)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        Delete any files you no longer need.<br/><br/>


                        56G8EG:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        7DVFPY:<br/>
                            028 Segmented program - ANIM ignored (Cautionary)<br/>
                        You have tried to generate for animation a segmented program<br/><br/>

                        Resolution:<br/>
                        Remove any segments from your original program.<br/><br/>


                        4ZM7E1:<br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        DVK5PK:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        JYONR3:<br/>
                            013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/><br/>

                        Resolution:<br/>
                        Resubmit your source code to your COBOL system to try to obtain valid intermediate code.<br/><br/>


                        5RLMIX:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        9HSWBR:<br/>
                            028 Segmented program - ANIM ignored (Cautionary)<br/>
                        You have tried to generate for animation a segmented program<br/><br/>

                        Resolution:<br/>
                        Remove any segments from your original program.<br/><br/>


                        8JALEA:<br/>
                            075 Call-convention not supported (Recoverable)<br/>
                        Illegal call-convention on an entry-point.<br/><br/>


                        429CJS:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        O0KAFI:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        SK544P:<br/>
                            013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/><br/>

                        Resolution:<br/>
                        Resubmit your source code to your COBOL system to try to obtain valid intermediate code.<br/><br/>


                        JCN5S4:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>

                        HYS4NU:<br/>
                            075 Call-convention not supported (Recoverable)<br/>
                        Illegal call-convention on an entry-point.<br/><br/>


                        F9W99G:<br/>
                            028 Segmented program - ANIM ignored (Cautionary)<br/>
                        You have tried to generate for animation a segmented program<br/><br/>

                        Resolution:<br/>
                        Remove any segments from your original program.<br/><br/>


                        IIZLRS:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>

                        TKV0IX:<br/>
                            039 Errors detected during creation of intermediate code (Recoverable)<br/>
                        You are trying to generate code from intermediate code that was found to contain severe errors when it was submitted to your COBOL system.<br/><br/>

                        Resolution:<br/>
                        Correct all the severe errors in your source code.<br/><br/>


                        XCBM3F:<br/>
                            075 Call-convention not supported (Recoverable)<br/>
                        Illegal call-convention on an entry-point.<br/><br/>


                        GFAHB2:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        90E3S1:<br/>
                            079 Too many data relocations (limit = limit, actual = limit (Recoverable)<br/>
                        Resolution:<br/>
                        Split your program into smaller subprograms<br/><br/>


                        DJERX8:<br/>
                            013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/>

                        Resolution:<br/>
                        Resubmit your source code to your COBOL system to try to obtain valid intermediate code.<br/><br/>


                        MC9ROO:<br/>
                            012 Dictionary or dynamic paging error (Fatal)<br/>
                        The disk is probably full.<br/><br/>

                        Resolution:<br/>
                        If the disk is full, delete any files you no longer need. If you receive this message and your disk is not full, contact Technical Support.<br/><br/>


                        MA0H55:<br/>
                            035 INT code not produced with ANIM (Cautionary)<br/>
                        You must use the ANIM directive when creating intermediate code.<br/><br/>

                        See Also:<br/>
                        The ANIM Compiler directive in the chapter Directives for Compiler in your Server Express User's Guide.<br/><br/>


                        EQ1CUF:<br/>
                            028 Segmented program - ANIM ignored (Cautionary)<br/>
                        You have tried to generate for animation a segmented program<br/><br/>

                        Resolution:<br/>
                        Remove any segments from your original program.<br/><br/>


                        TFG6B8:<br/>
                        An internal error has occurred.<br/><br/>


                        HDOP25:<br/>
                        013 Illegal intermediate code (at nnnnnn in seg mm) (Recoverable)<br/>
                        You are trying to create generated code from intermediate code that has been corrupted.<br/><br/>

                        nnnnnn is an intermediate code address; mm is an intermediate code segment number.<br/><br/>

                        Resolution:<br/>
                        Resubmit your source code to your COBOL system to try to obtain valid intermediate code.<br/>

                    </p>  
                </div>
            </div>
        </div> 
    )

}
 
export default ErrorLog
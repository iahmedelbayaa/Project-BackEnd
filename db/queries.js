exports.queryList = {

    AUDIT_QUERY : `INSERT INTO TEST.APP_AUDIT (AUDIT_ACTION, AUDIT_DATA, AUDIT_BY, AUDIT_ON, AUDIT_STATUS, AUDIT_ERROR) VALUES($1, $2, $3, $4, $5, $6)
    `,
    GET_INFO_LIST_QUERY:`SELECT USER_ID, FULLNAME, ADDRESS, GRADE, MAJOR, COURSE1, COURSE2, COURSE3, COURSE4, COURSE5, COURSE6, COURSE7, COURSE8 FROM TEST.INFO_STUDENT
    `,

    GET_USER_LIST_QUERY : ` SELECT USER_ID, USERNAME, EMAIL FROM TEST.APP_USER `,

    //IS_USER_EXISTS_QUERY : ` SELECT COUNT(USER_ID) FROM BMS.APP_USER WHERE LOWER(USERNAME) =LOWER($1) OR LOWER(EMAIL)=LOWER($2) `,

    SAVE_USER_QUERY : ` INSERT INTO TEST.APP_USER (USERNAME, PASSWORD, EMAIL) VALUES($1, $2, $3)  returning *  `,

    LOGIN_QUERY : `  SELECT USER_ID, EMAIL, PASSWORD FROM TEST.APP_USER WHERE LOWER(EMAIL) = LOWER($1) `,

    SAVE_STUDENT_QUERY : `INSERT INTO TEST.INFO_STUDENT (FULLNAME, USER_NUMBER, ADDRESS, GRADE, MAJOR, COURSE1, COURSE2, COURSE3, COURSE4, COURSE5, COURSE6, COURSE7, COURSE8) VALUES($1, $2, $3, $4, $5 , $6 , $7 , $8 , $9 , $10 , $11 , $12 , $13)
    `, 
    UPDATE_STUDENT_QUERY : `UPDATE TEST.INFO_STUDENT SET USER_ID=NEXTVAL('TEST.INFO_STUDENT_USER_ID_SEQ'::REGCLASS), FULLNAME=$1, USER_NUMBER=$2, ADDRESS=$3, GRADE=$4, MAJOR=$5, COURSE1=$6, COURSE2=$7, COURSE3=$8, COURSE4=$9, COURSE5=$10, COURSE6=$11, COURSE7=$12, COURSE8=$13
    `


}
import React from "react";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

function UserTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;
  console.log(users)
  if (!users.length) return <>کاربری وجود ندارد</>;
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <Table>
        <Table.header>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.header>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table>
    </div>
  );
}

export default UserTable;

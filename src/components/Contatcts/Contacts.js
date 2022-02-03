export default function Contact({ contacts, onDeleteContact, searchContact }) {
  return (
    <div>
      <table>
        {searchContact
          ? searchContact.map(contact => {
              const { id, name, number } = contact;
              return (
                <tbody key={id}>
                  <tr>
                    <th>{name}</th>
                    <th>{number}</th>
                    <th>
                      <button
                        type="button"
                        onClick={() => onDeleteContact(name)}
                      >
                        удалить
                      </button>
                    </th>
                  </tr>
                </tbody>
              );
            })
          : contacts.map(contact => {
              const { id, name, number } = contact;
              return (
                <tbody key={id}>
                  <tr>
                    <th>{name}</th>
                    <th>{number}</th>
                    <th>
                      <button
                        type="button"
                        onClick={() => onDeleteContact(name)}
                      >
                        удалить
                      </button>
                    </th>
                  </tr>
                </tbody>
              );
            })}
      </table>
    </div>
  );
}

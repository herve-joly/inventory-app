/*
 <>
        <h1>Items Store</h1>
        <button onClick={() => setForm(true)}>Add an Item</button>
        {form && <Form items={form} setForm={setForm} />}
        {!detail ? (
          <>
            <ItemsList items={items} setDetail={setDetail} />
          </>
        ) : (
          <Detail item={detail} setDetail={setDetail} deleteItem={deleteItem} />
        )}
      </>
*/

$name = $_POST['name'];
    $category = $_POST['category'];
    $text = $_POST['text'];
    $href = $_POST['href'];
    
    if(mb_strlen($name) > 0 && mb_strlen($category) > 0 && mb_strlen($text) > 0) {
        echo "Данные готовы к отправке! ";
    } else {
        echo "Какое-то из обязательных полей не заполнено! ";
    }
    
    $db = new PDO('mysql:host=localhost;dbname=u2076368_default', 'u2076368_default', 'M4Kkn85Ge7S5qAAs');
    $db->exec("SET NAMES UTF8");
    
    if(mb_strlen($name) > 0 && mb_strlen($category) > 0 && mb_strlen($text) > 0) {
        $query = $db->prepare("INSERT INTO programs (name, category, text, href) VALUES ('$name', '$category', '$text', '$href')");
        $affected = $query->execute();
        if($affected > 0) {
        echo "Данные отправлены в базу данных!";
        } else {
        echo "Нет, что-то пошло не так!!!";
        }
    }


    $query = $db->prepare("INSERT INTO programs (name, category, text, href) VALUES (:name, :category, :text, :href)");
        $params = ['name' => $name, 'category' => $category, 'text' => $text, 'href' => $href];
        $affected = $query->execute($params);



    /////////////////////////////////////////////////////////

    <?php

    $id = htmlspecialchars($_GET['id']);
    
    $db = new PDO('mysql:host=localhost;dbname=u2076368_default', 'u2076368_default', 'M4Kkn85Ge7S5qAAs');
    $db->exec("SET NAMES UTF8");
    
    $sql = "SELECT * FROM programs WHERE id = :id";
    $stmt = $db->prepare($sql);
    $params = ['id' => $id];
    $stmt->execute($params);
    $result = $stmt->Fetch(PDO::FETCH_ASSOC);
   
    echo json_encode($result);

    
    
    // $db = new PDO('mysql:host=localhost;dbname=u2076368_default', 'u2076368_default', 'M4Kkn85Ge7S5qAAs');
    // $db->exec("SET NAMES UTF8");
    
    // if(mb_strlen($name) > 0 && mb_strlen($category) > 0 && mb_strlen($text) > 0) {
    //     $query = $db->prepare("UPDATE programs SET name = :name, category = :category, text = :text, href = :href WHERE id = :id");
    //     $params = ['name' => $name, 'category' => $category, 'text' => $text, 'href' => $href, 'id' => $id];
    //     $affected = $query->execute($params);
    //     if($affected > 0) {
    //     echo "Данные отправлены в базу данных!";
    //     } else {
    //     echo "Нет, что-то пошло не так!!!";
    //     }
    // }
       



    // $mysql = new mysqli('localhost', 'u2076368_default', 'M4Kkn85Ge7S5qAAs', 'u2076368_default');
    // $mysql->set_charset("utf8");
    
    // $result = $mysql->query("SELECT * FROM `programs`");
    
    // $progs = [];
    // $i = 0;
    // while ($obj = $result->fetch_assoc()) {
    //     $progs[$i] = $obj;
    //     $i++;
    // }
    // echo json_encode($progs); // массив объектов
    

    // $result = $query or die(mysqli_error());
    // while($count = mysqli_fetch_all($result))
    // {
    //     echo json_encode($count);
    // } // массив массивов (короткая запись)

    // $mysql->close();

?>

.htaccess:

SetEnvIf Origin "^http(s)?://(.+\.)?(localhost:3000|nappelbaum.github\.io)$" origin_is=$0 
Header always set Access-Control-Allow-Origin %{origin_is}e env=origin_is

Header set Access-Control-Allow-Credentials: true
Header set Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT"
Header add Access-Control-Allow-Headers: "x-requested-with, content-type, origin, authorization, accept, client-security-token"
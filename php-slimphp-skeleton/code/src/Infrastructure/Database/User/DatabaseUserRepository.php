<?php declare(strict_types=1);


namespace App\Infrastructure\Database\User;


use App\Domain\User\User;
use App\Domain\User\UserNotFoundException;
use App\Domain\User\UserRepository;
use RedBeanPHP\OODBBean;

class DatabaseUserRepository implements UserRepository
{

    /**
     * @var User[]
     */
    private $users;

    /**
     * InMemoryUserRepository constructor.
     *
     * @param array|null $users
     */
    public function __construct(array $users = null)
    {
        $this->users = $users ?? [
                1 => new User(1, 'bill.gates', 'Bill', 'Gates'),
                2 => new User(2, 'steve.jobs', 'Steve', 'Jobs'),
                3 => new User(3, 'mark.zuckerberg', 'Mark', 'Zuckerberg'),
                4 => new User(4, 'evan.spiegel', 'Evan', 'Spiegel'),
                5 => new User(5, 'jack.dorsey', 'Jack', 'Dorsey'),
            ];
        foreach($this->users as $user){
            $bean = \RedBeanPHP\R::dispense( 'users' );
            $bean->username = $user->getUsername();
            $bean->firstName = $user->getFirstName();
            $bean->lastName = $user->getLastName();
            \RedBeanPHP\R::store( $bean );
        }
    }

    private static function toUser(OODBBean $bean): User
    {
        return new User((int) $bean->id, $bean->username, $bean->first_name, $bean->last_name);
    }

    private static function toUsers(array $beans): array
    {
        return array_map('self::toUser', $beans);
    }

    public function findAll(): array
    {
        $users = \RedBeanPHP\R::findAll('users');
        return self::toUsers($users);
    }

    public function findUserOfId(int $id): User
    {
        $user = \RedBeanPHP\R::findOne('users', ' id = ? ', [$id]);
        return self::toUser($user);
    }
}
